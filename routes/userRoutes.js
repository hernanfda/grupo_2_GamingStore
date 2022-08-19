const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const validator = require('../middlewares/validator');
const multer = require('../middlewares/multer');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// Rutas de logeo
router.get("/login", guestMiddleware, userControllers.login);
router.post("/login", userControllers.processLogin);
// Rutas de registro
router.get("/register", guestMiddleware, userControllers.register);
router.post("/register", multer.single('userAvatar'),validator.register, userControllers.processRegister);
// Rutas de deslogeo y perfil
router.get("/logout", userControllers.logout);
router.get("/profile", authMiddleware ,userControllers.profile);
// Rutas de editar perfil
router.get("/edit", authMiddleware, userControllers.edit);
router.put("/edit", authMiddleware, multer.single('userAvatar'), userControllers.processEdit);

module.exports = router