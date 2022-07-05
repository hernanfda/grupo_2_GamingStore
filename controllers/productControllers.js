const productList = [
    {
        id: 1,
        brand: "LOGITECH",
        model: "G413",
        type: "keyboard",
        price: "$10.499",
        offers: true, //Va a la seccion "en oferta"
        popular: true, //Va a la seccion "destacados"
    },
    {
        id: 2,
        brand: "REDDRAGON",
        model: "FIZZ K617",
        type: "keyboard",
        price: "$8.499",
        offers: true,
        popular: true, 
    },
    {
        id: 3,
        brand: "REDDRAGON",
        model: "STORM M808",
        type: "mouse",
        price: "$6.299",
        offers: true,
        popular: true, 
    },
    {
        id: 4,
        brand: "LOGITECH",
        model: "PRO WIRELESS",
        type: "mouse",
        price: "$9.499",
        offers: true,
        popular: true, 
    },
    {
        id: 5,
        brand: "REDDRAGON",
        model: "H510 ZEUS-X",
        type: "headset",
        price: "$10.799",
        offers: true,
        popular: true, 
    },
    {
        id: 6,
        brand: "LOGITECH",
        model: "G733",
        type: "headset",
        price: "$21.799",
        offers: true,
        popular: true, 
    },
    {
        id: 7,
        brand: "SECRETLAB",
        model: "TITANXL",
        type: "chair",
        price: "$38.000",
        offers: true,
        popular: true, 
    },
    {
        id: 8,
        brand: "CORSAIR",
        model: "T3 RUSH",
        type: "chair",
        price: "$84.899",
        offers: true,
        popular: true, 
    },
]

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