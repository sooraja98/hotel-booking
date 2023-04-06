const Vendor = require("../Schema/Vendor.js");
const Hotel = require("../Schema/Hotel.js");


module.exports = {
    hotelfinduser: async (req, res) => {
        try {
            const place = req.params.place;
            const vendors = await Vendor.find({district: place});
            res.json(vendors);
        } catch (error) {
            console.log('the error happend in the backend hotelfinduser' + error)
        }
    },


    hotelnamefinding:async(req,res)=>{

        try {
            const id = req.params.id;
            const obj = JSON.parse(id);
            const value = obj['*'];
            const data=await Vendor.find({_id:value})
            console.log(data)
            res.json(data)
        } catch (error) {
            console.log('the error happedn in the backend hotel name finding place')
            
        }
    },


    singlehotelview: async (req, res) => {

        try {
            const id = req.params.id;
            const obj = JSON.parse(id);
            const value = obj['*'];
            console.log(value)
            const hotel= await Hotel.findOne({vendor:value})
            console.log(hotel)
            res.json(hotel)
        } catch (error) {
            console.log('the error hapoend in the backend singlehotelview')
        }

    },
    

}
