const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');
const upload = require('../middlewares/multer'); 

//get all products
router.get("/", productControllers.productList);
//work in progress of cart products
router.get("/cart", productControllers.productCart);
//filter by id
router.get("/details/:id", productControllers.productDetail);
//filter by type
router.get("/list/:type", productControllers.productFilter);
//create and store product
router.get("/create", productControllers.createProduct);
router.post("/", upload.single('image'), productControllers.saveProduct);
//edit product
router.get("/edit/:id", productControllers.editProduct);
router.put("/:id", upload.single('image'), productControllers.updateProduct);

module.exports = router