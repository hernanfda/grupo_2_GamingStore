const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');
const upload = require('../middlewares/multer');
const adminMiddleware = require('../middlewares/adminMiddleware');

//get all products
router.get("/", productControllers.productList);
//work in progress of cart products
router.get("/cart", productControllers.productCart);
//filter by id
router.get("/details/:id", productControllers.productDetail);
//filter by type
router.get("/list/:type", productControllers.productFilter);
//create and store product
router.get("/create", adminMiddleware, productControllers.createProduct); ///OJO QUE SAQUE EL MIDDLEWARE
router.post("/", upload.single('image'), productControllers.saveProduct);
//edit product
router.get("/edit/:id", adminMiddleware, productControllers.editProduct);
router.put("/:id", upload.single('image'), productControllers.updateProduct);
//delete product
router.delete("/delete/:id", adminMiddleware, productControllers.deleteProduct);

module.exports = router