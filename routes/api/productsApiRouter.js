const express = require('express');
const router = express.Router();
const productsApiControllers = require('../../controllers/api/productsApiControllers');
const upload = require('../../middlewares/multer');


//listo all products
router.get('/', productsApiControllers.productList)
//listo all products of a certain type
router.get("/list/:type", productsApiControllers.productFilter);
//get a  detaial of certain product 
router.get("/details/:id", productsApiControllers.productDetail);
//create a new product
router.post("/create", upload.single('image'), productsApiControllers.saveProduct);
//get tha last ptoduct in DB
router.get('/lastone', productsApiControllers.lastOneInDb)




module.exports = router;