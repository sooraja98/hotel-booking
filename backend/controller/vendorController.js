const Hotel = require("../Schema/Vendor.js");
const NODE_MAILER_GENERATED_EMAIL=process.env.NODE_MAILER_GENERATED_EMAIL
const NODE_MAILER_GMAIL_SECRET=process.env.NODE_MAILER_GMAIL_SECRET
const NODE_MAILER_SENDER_ADDRESS=process.env.NODE_MAILER_SENDER_ADDRESS
const nodemailer = require("nodemailer");
const { options } = require("../Routes/vendor.js");

module.exports = {
  vendorRegister: async (req, res) => {
    try {
      const hotel = new Hotel({
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
        panPic: req.files.panPic[0].path,
      });
      await hotel.save();
      res.status(200).json({ message: "Hotel registration successful!" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred. Please try again later." });
    }
  },

  vendorLogin: async (req, res) => {
    try {
      const email = req.body.email;
      console.log(email)
      const da = await Hotel.findOne({email:email});
      console.log(da)
      const data=da.allowed
      if (data===true) {
        const otp = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
          //service nodemailer
      const transporter = await nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: NODE_MAILER_GENERATED_EMAIL, // generated ethereal user
          pass: NODE_MAILER_GMAIL_SECRET, // generated ethereal password
        },
      });
      //mail template

      const info = await {
        from: NODE_MAILER_SENDER_ADDRESS, // sender address
        to: email, // list of receivers
        subject: "otp ✔", // Subject line
        html: `<b>your otp is ${otp}</b>`, // html body
      };
      await transporter.sendMail(info);
      return res.status(200).json({data:otp,message:'approve'})
      }
      else if(data===false){
       return res.json('pending')
      }
    } catch (error) {
      console.log('the error happend in the vendor login otp section'+error) 
    }

 
  },
};
