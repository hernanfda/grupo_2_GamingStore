const productControllers = {
    productCart: (req, res) => {
        res.render('products/cart', { styles: "product-cart" })
    },
    productDetail: (req, res) => {
        res.render('products/detail', { styles: "product_detail_styles" })
    },
    add: (req, res) => {
        res.render('products/add', { styles: "register_login" })
    },
    modify: (req, res) => {
        res.render('products/modify', { styles: "register_login" })
    }
}

module.exports = productControllers