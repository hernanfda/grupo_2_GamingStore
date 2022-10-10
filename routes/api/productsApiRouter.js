const express = require('express');
const router = express.Router();
const productsApiControllers = require('../../controllers/api/productsApiControllers');

//listo all products
router.get('/', productsApiControllers.productList)
//listo all products of a certain type
router.get("/list/:type", productsApiControllers.productFilter);
//get a  detaial of certain product 
router.get("/details/:id", productsApiControllers.productDetail);




module.exports = router;