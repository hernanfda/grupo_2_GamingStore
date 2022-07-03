const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

router.get("/cart", productControllers.productCart);
router.get("/detail", productControllers.productDetail);
router.get("/add", productControllers.add);
router.get("/modify", productControllers.modify);

module.exports = router