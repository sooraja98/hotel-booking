
const express = require("express");
const router = express.Router();
const adminController=require('../controller/adminController.js')
const  {adminTokenAuth}=require('../middileware/adminAuth')


router.post('/login',adminController.login)
router.get('/requests',adminTokenAuth,adminController.vendorRequest)
router.get('/request/singleRequestData/:id',adminTokenAuth,adminController.singleRequestData)
router.patch('/request/allowing/:id',adminController.requestAllowing)
router.patch('/request/reject/:id',adminTokenAuth,adminController.requestReject)
router.get('/vendorList',adminTokenAuth,adminController.vendorList)
router.get('/rejectvendorList',adminTokenAuth,adminController.rejectVendorList)





module.exports = router;
