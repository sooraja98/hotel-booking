const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");
const multer = require("multer");
const YOUR_CLOUD_NAME = process.env.YOUR_CLOUD_NAME;
const YOUR_API_KEY = process.env.YOUR_API_KEY;
const YOUR_API_SECRET = process.env.YOUR_API_SECRET;
const vendorController = require("../controller/vendorController.js");

// Configure Cloudinary
cloudinary.config({cloud_name: YOUR_CLOUD_NAME, api_key: YOUR_API_KEY, api_secret: YOUR_API_SECRET});

// Configure Multer and Cloudinary Storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => {
        let folder;
        switch (file.fieldname) {
            case "hotelPic": folder = "vendor/hotel";
                break;
            case "ownerPic": folder = "vendor/owner";
                break;
            case "adharPic": folder = "vendor/adhar";
                break;
            case "panPic": folder = "vendor/pan";
                break;
            case "hotelImages": folder = "vendor/hotelimages";
                break;
            default: folder = "default";
        }
        return {
                folder: folder, format: "png", public_id: `${
                Date.now()
            }-${
                file.originalname
            }`
        };
    }
});

const upload = multer({storage: storage});
router.post("/register", upload.fields([
    {
        name: "hotelPic",
        maxCount: 4
    }, {
        name: "ownerPic",
        maxCount: 1
    }, {
        name: "adharPic",
        maxCount: 1
    }, {
        name: "panPic",
        maxCount: 1
    },
]), vendorController.vendorRegister);
router.post('/emailVerify', vendorController.emailVerify)
router.post('/login', vendorController.login)
router.post('/hoteladding', vendorController.hoteladding)
router.get('/hotelroomgetting', vendorController.hotelroomgetting)
router.delete('/deleteroom/:hotelId/:roomId', vendorController.deleteroom)

// Update the following route to use upload.array() instead of upload.fields()
router.post('/uploadimage', upload.fields({name:"hotelImages", maxCount:9}), vendorController.uploadimage)

module.exports = router;
