const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const validator = require('../middlewares/validator');
const multer = require('../middlewares/multer');
const userLogged = require('../middlewares/userLogged')

router.get("/login", userLogged,userControllers.login);
router.post("/login", userControllers.processLogin);
router.get("/register", userControllers.register);
router.post("/register", multer.single('userAvatar'),validator.register, userControllers.processRegister);

module.exports = router