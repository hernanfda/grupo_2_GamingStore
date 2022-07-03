const productControllers = {
    productCart: (req, res) => {
        res.render('products/cart', { styles: "product-cart" })
    },
    productDetail: (req, res) => {
        res.render('products/detail', { styles: "product_detail_styles" })
    }
}

module.exports = productControllers