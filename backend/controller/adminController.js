
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const NODE_MAILER_GENERATED_EMAIL=process.env.NODE_MAILER_GENERATED_EMAIL
const NODE_MAILER_GMAIL_SECRET=process.env.NODE_MAILER_GMAIL_SECRET
const NODE_MAILER_SENDER_ADDRESS=process.env.NODE_MAILER_SENDER_ADDRESS
const JWT_SECRET_ADMIN=process.env.JWT_SECRET_ADMIN
const nodemailer = require("nodemailer");
const Vendor = require("../Schema/Vendor.js");
const jwt=require('jsonwebtoken')
module.exports = {
  login: async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const token = jwt.sign({email}, JWT_SECRET_ADMIN, {expiresIn: '1d'});
        return res.status(200).json({ message: "admin login succesfullhy",token });
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
      const vendorRequests = await Vendor.find({ allowed: 'false', reject: 'false' });
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
      const requestedData = await Vendor.findOne({_id:value});
      res.json(requestedData);
    } catch (error) {
      console.log('the error is in the singleRequestdata findin in the backend side'+error)
    }
  },
  requestAllowing:async(req,res)=>{
    console.log('requwst alliwubng')
    try {
      const id = req.params.id;
      
      const data=await Vendor.findById(id)
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
      console.log(' working')
        res.json('changed')
      }
    } 
    catch (error) {
      console.log('the error is in the requestAllowing  in the backend side'+error)
      
    }

  },

  vendorList:async (req, res) => {
    try {
        const vendorRequests = await Vendor.find({ allowed: true });
        res.json(vendorRequests);
    } catch (err) {
      console.error('the error happend in the vendor fetching backend'+err);
      res.status(500).json({ message: "Server Error" });
    }
  },
  rejectVendorList:async (req, res) => {
    try {
        const rejectvendorList = await Vendor.find({ reject: true });
        res.json(rejectvendorList);
    } catch (err) {
      console.error('the error happend in the rejectvendorList fetching backend'+err);
      res.status(500).json({ message: "Server Error" });
    }
  },
  requestReject:async(req,res)=>{
    try {
      const id = req.params.id;
      const data=await Vendor.findById(id)
      if(data.reject===false){
        data.reject=true;
        await data.save()
        res.json('changed')
      }
    } 
    catch (error) {
      console.log('the error is in the requestAllowing  in the backend side'+error)
      
    }

  },
};
