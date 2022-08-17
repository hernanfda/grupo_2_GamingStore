const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const validator = require('../middlewares/validator');
const multer = require('../middlewares/multer');

router.get("/login", userControllers.login);
router.post("/login", userControllers.processLogin);
router.get("/register", userControllers.register);
router.post("/register", multer.single('userAvatar'),validator.register, userControllers.processRegister);
router.get("/logout", userControllers.logout);

module.exports = router