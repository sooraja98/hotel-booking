const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  ownername: {
    type: String,
    required: true,
  },
  hotelname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pin: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  gst: {
    type: String,
    required: true,
  },
  adhar: {
    type: String,
    required: true,
  },
  pan: {
    type: String,
    required: true,
  },
  hotelPic: {
    type: [String],
  },
  ownerPic: {
    type: String,
  },
  adharPic: {
    type: String,
  },
  panPic: {
    type: String,
  },
  allowed:{
    type:Boolean,
    default:false
  },
  banned:{
    type:Boolean,
    default:false 
  },
  strike:{
    type:Number,
  }
});

module.exports = mongoose.model('Hotel', hotelSchema);