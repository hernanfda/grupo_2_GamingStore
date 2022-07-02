const products = require('../modules/products')
const controllerAddProducts = {
    addProducts: (req, res) => {
        res.render('addProducts.ejs', products)
    }
}

module.exports = controllerAddProducts;