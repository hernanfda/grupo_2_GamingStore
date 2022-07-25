const { json } = require("express");
const path = require("path");
const fs = require("fs");

const products = path.join(__dirname, "../data/products-list.json");
const productList = JSON.parse(fs.readFileSync(products));

const mainControllers = {
    index: (req, res) => {
        res.render('index', { styles: "styles", productList: productList });
    }
}

module.exports = mainControllers