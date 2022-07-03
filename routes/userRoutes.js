const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

router.get("/login", userControllers.login);
router.get("/register", userControllers.register);

module.exports = router