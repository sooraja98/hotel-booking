const Vendor = require("../Schema/Vendor.js");


module.exports = {
    hotelfinduser: async (req, res) => {
        try {
            const place = req.params.place;
            const vendors = await Vendor.find({district: place});
            res.json(vendors);
        } catch (error) {
            console.log('the error happend in the backend hotelfinduser' + error)
        }
    }

}
