const { urlencoded } = require("express")
const fs = require("fs");
const productList = require("../data/products-list.json");



const productControllers = {
    productCart: (req, res) => {
        res.render('products/cart', { styles: "product-cart" })
    },
    productList: (req, res) => {
        res.render('products/list', { styles: "product_detail_styles", productList: productList })
    },
    productFilter: (req, res) => {
        let productType = req.params.type
        let filteredList = productList.filter(element => element.type == productType);

        res.render('products/list', { styles: "product_detail_styles", productList: filteredList })
    },
    productDetail: (req, res) => {
        let id = req.params.id;
        let product = productList.find(e => e.id == id)

        res.render('products/details', { styles: "product_detail_styles", product: product })
    },
    addProduct: (req, res) => {
        res.render('products/add', { styles: "register_login" })
    },
    saveProduct: (req, res) => {
        let product = req.body;
        product.id = productList.length + 1;
        if (req.file) {
            product.image = req.file.filename;
        }
        productList.push(product);

        fs.writeFileSync("./data/products-list.json", JSON.stringify(productList, null, 2));
        res.redirect('/products/list');
    },
    editProduct: (req, res) => {
        let id = req.params.id;
        let product = productList.find(e => e.id == id)
        res.render('products/edit', { styles: "register_login", product: product })
    }
}

//fs.writeFileSync('../data/products-list.json', JSON.stringify(productList, null, 2), 'utf-8')

module.exports = productControllers