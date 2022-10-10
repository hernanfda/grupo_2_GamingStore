const express = require('express');
const router = express.Router();
const productsApiControllers = require('../../controllers/api/productsApiControllers');

router.get('/', productsApiControllers.productList)

module.exports = router;