const express = require('express');
const router = express.Router();
const usersApiControllers = require('../../controllers/api/usersApiControllers')
const multer = require('../../middlewares/multer');



router.post("/register", multer.single('userAvatar'), usersApiControllers.processRegister);

module.exports = router;