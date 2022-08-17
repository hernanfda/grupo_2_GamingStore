const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const validator = require('../middlewares/validator');
const multer = require('../middlewares/multer');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get("/login", guestMiddleware, userControllers.login);
router.post("/login", userControllers.processLogin);
router.get("/register", guestMiddleware, userControllers.register);
router.post("/register", multer.single('userAvatar'),validator.register, userControllers.processRegister);
router.get("/logout", userControllers.logout);
router.get("/profile", authMiddleware ,userControllers.profile);

module.exports = router