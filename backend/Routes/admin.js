const express = require("express");
const router = express.Router();
const adminController=require('../controller/adminController.js')



router.post('/login',adminController.login)
router.get('/requests',adminController.vendorRequest)
router.get('/request/singleRequestData/:id',adminController.singleRequestData)
router.patch('/request/allowing/:id',adminController.requestAllowing)
router.get('/vendorList',adminController.vendorList)





module.exports = router;
