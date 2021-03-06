const productList = [
    {
        id: 1,
        brand: "LOGITECH",
        model: "G413",
        type: "keyboard",
        price: 10499,
        image: "/img/product-detail/Product_Keyboard_Logitech_G413_1.webp",
        offers: false, //Va a la seccion "en oferta"
        popular: true, //Va a la seccion "destacados"
    },
    {
        id: 2,
        brand: "REDDRAGON",
        model: "FIZZ K617",
        type: "keyboard",
        price: 8499,
        image: "/img/product-detail/Product_Keyboard_REDRAGON_FIZZ_K617_1.webp",
        offers: true,
        popular: false,
    },
    {
        id: 3,
        brand: "REDDRAGON",
        model: "STORM M808",
        type: "mouse",
        price: 6299,
        image: "/img/product-detail/Product_Mouse_REDRAGON_STORM_M808_1.webp",
        offers: true,
        popular: false,
    },
    {
        id: 4,
        brand: "LOGITECH",
        model: "PRO WIRELESS",
        type: "mouse",
        price: 9499,
        image: "/img/product-detail/Product_Mouse_Logitech_PRO_1.webp",
        offers: false,
        popular: true,
    },
    {
        id: 5,
        brand: "REDDRAGON",
        model: "H510 ZEUS-X",
        type: "headset",
        price: 10799,
        image: "/img/product-detail/Product_Headset_REDRAGON_H510_ZEUS-X_1.webp",
        offers: true,
        popular: false,
    },
    {
        id: 6,
        brand: "LOGITECH",
        model: "G733",
        type: "headset",
        price: 21799,
        image: "/img/product-detail/Product_Headset_Logitech_G733_1.webp",
        offers: false,
        popular: true,
    },
    {
        id: 7,
        brand: "SECRETLAB",
        model: "TITANXL",
        type: "chair",
        price: 38000,
        image: "/img/product-detail/Product_GamingChairs_SecretLab_TitanXL_01.webp",
        offers: false,
        popular: false,
    },
    {
        id: 8,
        brand: "CORSAIR",
        model: "T3 RUSH",
        type: "chair",
        price: 84899,
        image: "/img/product-detail/Product_GamingChairs_Corsair_T3_RUSH_01.webp",
        offers: true,
        popular: false,
    },
]

const mainControllers = {
    index: (req, res) => {
        res.render('index', { styles: "styles", productList: productList });
    }
}

module.exports = mainControllers