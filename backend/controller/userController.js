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
    singlehotelview: async (req, res) => {

        try {
            const id = req.params.id;
            const obj = JSON.parse(id);
            const value = obj['*'];
            console.log(value)
            const hotel= await Hotel.find({vendor:value})
            console.log(hotel)
        } catch (error) {}

    }

}
