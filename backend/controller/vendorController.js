const Vendor = require("../Schema/Vendor.js");
const Hotel = require("../Schema/Hotel.js")
const NODE_MAILER_GENERATED_EMAIL = process.env.NODE_MAILER_GENERATED_EMAIL;
const NODE_MAILER_GMAIL_SECRET = process.env.NODE_MAILER_GMAIL_SECRET;
const NODE_MAILER_SENDER_ADDRESS = process.env.NODE_MAILER_SENDER_ADDRESS;
const JWT_SECRET_VENDOR = process.env.JWT_SECRET_VENDOR;

const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

module.exports = {
    vendorRegister: async (req, res) => {
        try {
            const vendor = new Vendor({
                ownername: req.body.ownername,
                hotelname: req.body.hotelname,
                email: req.body.email,
                address: req.body.address,
                country: req.body.country,
                state: req.body.state,
                district: req.body.district,
                city: req.body.city,
                pin: req.body.pin,
                phone: req.body.phone,
                gst: req.body.gst,
                adhar: req.body.adhar,
                pan: req.body.pan,
                hotelPic: req.files.hotelPic.map((file) => file.path),
                ownerPic: req.files.ownerPic[0].path,
                adharPic: req.files.adharPic[0].path,
                panPic: req.files.panPic[0].path
            });
            await vendor.save();
            res.status(200).json({message: "Hotel registration successful!"});
        } catch (error) {
            console.error(error);
            res.status(500).json({message: "An error occurred. Please try again later."});
        }
    },

    emailVerify: async (req, res) => {
        try {
            const email = req.body.email;
            const vendor = await Vendor.findOne({email: email});
            if (vendor) {
                const data = vendor.allowed;
                if (data === true) {
                    const otp = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
                    console.log("otp form the email verification" + otp);
                    // service nodemailer
                    vendor.otp = otp;
                    await vendor.save();
                    const transporter = await nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                            user: NODE_MAILER_GENERATED_EMAIL, // generated ethereal user
                            pass: NODE_MAILER_GMAIL_SECRET, // generated ethereal password
                        }
                    });
                    // mail template

                    const info = await {
                        from : NODE_MAILER_SENDER_ADDRESS, // sender address
                        to : email, // list of receivers
                        subject : "otp ✔", // Subject line
                        html : `<b>your otp is ${otp}</b>`, // html body
                    };
                    await transporter.sendMail(info);

                    return res.status(200).json({message: "approve"});
                } else if (data === false) {
                    return res.json("pending");
                }
            } else {
                return res.json("not a user");
            }
        } catch (error) {
            console.log("the error happend in the vendor login otp section" + error);
        }
    },
    login: async (req, res) => {
        const frontEndOtp = parseInt(req.body.otp);
        const email = req.body.email;
        const vendor = await Vendor.findOne({email: email});
        const saveOtp = vendor.otp;
        if (saveOtp === frontEndOtp) {
            vendor.otp = 0;
            await vendor.save();
            const token = jwt.sign({
                email
            }, JWT_SECRET_VENDOR, {expiresIn: "1d"});
            res.json({data: "success", token});
        } else {
            res.json({data: "wrong"});
        }
    },


    hoteladding: async (req, res) => {
        const {roomType, roomCount, roomPrice} = req.body;
        const email = req.body.email;
        try {
            console.log("rom data feom the feint end" + roomType, roomCount, roomPrice)
            const decodedEmail = jwt.verify(email, JWT_SECRET_VENDOR);
            const vendor = await Vendor.findOne({email: decodedEmail.email});
            const vendor_id = vendor._id;

            const hotel = await Hotel.findOne({vendor: vendor_id});
            if (! hotel) { // If hotel doesn't exist, create a new one
                const newHotel = new Hotel({
                    vendor: vendor_id,
                    room: [
                        {
                            roomType: roomType,
                            roomCount: roomCount,
                            roomPrice: roomPrice
                        }
                    ]
                });
                const savedHotel = await newHotel.save();
                res.json(savedHotel);
            } else {
                if (hotel.room.length === 0) { // If room array is empty, create a new one
                    hotel.room = [{
                            roomType: roomType,
                            roomCount: roomCount,
                            roomPrice: roomPrice
                        }];
                } else { // Update the existing room array with new values
                    hotel.room.push({roomType: roomType, roomCount: roomCount, roomPrice: roomPrice});
                }
                const saveHotel = await hotel.save();
                res.status(200).json([saveHotel])
            }
        } catch (error) {
            console.log('the error happend in the hotelroom adding section backend ' + error);
            res.status(500).json({error: 'Server error'});
        }
    },
    hotelroomgetting: async (req, res) => {
        const email = req.query.email;
        try {
            const decodedEmail = jwt.verify(email, JWT_SECRET_VENDOR);
            const vendor = await Vendor.findOne({email: decodedEmail.email});
            const vendor_id = vendor._id;
            const hotel = await Hotel.findOne({vendor: vendor_id});
            res.status(200).json([hotel]);

        } catch (error) {
            console.log('the happend in the hotel getting backend api' + error)
        }

    },
    deleteroom: async (req, res) => {
        const hotelId = req.params.hotelId
        const roomId = req.params.roomId
        try {
            const hotel = await Hotel.findByIdAndUpdate(hotelId, {
              $pull: { room: { _id: roomId } }
            });
            if (!hotel) {
              return res.status(404).send('Hotel not found');
            }
            return res.send('Room deleted successfully');
          } catch (err) {
            console.error('Error deleting room:', err);
            return res.status(500).send(err);
          }
    }

};
