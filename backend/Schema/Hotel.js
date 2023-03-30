const mongoose =require("mongoose")

const hotelSchema= new mongoose.Schema({
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor'
      },
      room:[{
        roomType:String,
        roomCount:Number,
        roomPrice:Number,
      },],
      hotelImages:[String],
      facilities:[String]
}
)

module.exports=mongoose.model('Hotel',hotelSchema)