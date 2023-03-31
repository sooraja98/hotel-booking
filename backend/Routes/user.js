const express = require("express");
const router = express.Router();
const userController = require('../controller/userController')


router.get('/hotelfinduser/:place', userController.hotelfinduser)
router.get('/hotels/singlehotelview/:id',userController.singlehotelview)


module.exports = router;
