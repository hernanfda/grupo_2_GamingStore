const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

router.get("/cart", productControllers.productCart);
router.get("/list", productControllers.productList);
router.get("/details/:id", productControllers.productDetail);
router.get("/list/:type", productControllers.productFilter);
router.get("/add", productControllers.add);
router.get("/modify", productControllers.modify);

module.exports = router