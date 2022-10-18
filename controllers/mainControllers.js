const { json } = require("express");
const path = require("path");
const fs = require("fs");
const db = require("../database/models");
const ProductList = db.Products;

// const products = path.join(__dirname, "../data/products-list.json");
// const productList = JSON.parse(fs.readFileSync(products));

const mainControllers = {
    index:  async (req, res) => {
        await ProductList.findAll({
          include: ["brands", "categories"],
        })
          .then((productList, brands) => {
            //console.log(productList);
            res.render("index", { styles: "styles", productList, brands });
          })
          .catch((error) => {
            console.error(error);
          });
}}

module.exports = mainControllers



// res.render('index', { styles: "styles", productList: productList });