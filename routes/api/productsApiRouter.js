const express = require('express');
const router = express.Router();
const productsApiControllers = require('../../controllers/api/productsApiControllers');
const upload = require('../../middlewares/multer');


//list all products
router.get('/', productsApiControllers.productList)
//list categories
router.get("/categories", productsApiControllers.listCategory);
//listo all products of a certain type
router.get("/list/:type", productsApiControllers.productFilter);
//get a  detaial of certain product 
router.get("/details/:id", productsApiControllers.productDetail);
//create a new product
router.post("/create", upload.single('image'), productsApiControllers.saveProduct);
//get tha last ptoduct in DB
router.get('/lastone', productsApiControllers.lastOneInDb);
//update one product 
router.put("/update/:id", productsApiControllers.updateProduct);
//delete one product
router.delete("/delete/:id", productsApiControllers.deleteProduct);
//search a product
router.post('/search', productsApiControllers.searchProduct);





module.exports = router;