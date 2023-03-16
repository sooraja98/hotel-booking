
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const NODE_MAILER_GENERATED_EMAIL=process.env.NODE_MAILER_GENERATED_EMAIL
const NODE_MAILER_GMAIL_SECRET=process.env.NODE_MAILER_GMAIL_SECRET
const NODE_MAILER_SENDER_ADDRESS=process.env.NODE_MAILER_SENDER_ADDRESS
const nodemailer = require("nodemailer");
const Hotel = require("../Schema/Vendor.js");
module.exports = {
  login: async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        return res.status(200).json({ message: "admin login succesfullhy" });
      } else {
        return res
          .status(201)
          .json({ message: "email and password not match" });
      }
    } catch (error) {
      console.log("error ocuured in the admin login section" + error);
    }
  },

  vendorRequest: async (req, res) => {
    try {
        const vendorRequests = await Hotel.find({ allowed: 'false' });
        res.json(vendorRequests);
    } catch (err) {
      console.error('the error happend in the vendor fetching backend'+err);
      res.status(500).json({ message: "Server Error" });
    }
  },
  singleRequestData:async(req,res)=>{
    try {
      const id = req.params.id;
      const obj = JSON.parse(id);
      const value = obj['*'];
      const requestedData = await Hotel.findOne({_id:value});
      res.json(requestedData);
    } catch (error) {
      console.log('the error is in the singleRequestdata findin in the backend side'+error)
    }
  },
  requestAllowing:async(req,res)=>{
    try {
      const id = req.params.id;
      const data=await Hotel.findById(id)
      if(data.allowed===false){
        data.allowed=true;
        await data.save()
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
        to: data.email, // list of receivers
        subject: "You are now become a Vendor ✔", // Subject line
        html: `<b> You can now login the website using your Email id annd verification code </b>`, // html body
      };
      await transporter.sendMail(info);
        res.json('changed')
      }
    } 
    catch (error) {
      console.log('the error is in the requestAllowing  in the backend side'+error)
      
    }

  },

  vendorList:async (req, res) => {
    try {
        const vendorRequests = await Hotel.find({ allowed: true });
        res.json(vendorRequests);
    } catch (err) {
      console.error('the error happend in the vendor fetching backend'+err);
      res.status(500).json({ message: "Server Error" });
    }
  }
};
