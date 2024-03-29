const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const vendorRoute=require('./Routes/vendor.js')
const adminRoute=require('./Routes/admin.js');
const userRoute=require('./Routes/user.js')

// const userRoute=require('./Routes/user.js')
const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/hotel-booking", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



// Handle hotel registration form submission
app.use('/vendor',vendorRoute)
app.use('/admin',adminRoute)
app.use('/user',userRoute)


app.listen(PORT, () => {
  console.log("sever is started");
});
