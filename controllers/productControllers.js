const { urlencoded } = require("express");
const fs = require("fs");
const productList = require("../data/products-list.json");

const productControllers = {
    productCart: (req, res) => {
        res.render("products/cart", { styles: "product-cart" });
    },
    productList: (req, res) => {
        res.render("products/list", {
            styles: "product_detail_styles",
            productList,
        });
    },
    productFilter: (req, res) => {
        let productType = req.params.type;
        let filteredList = productList.filter((element) => element.type == productType);

        res.render("products/list", {
            styles: "product_detail_styles",
            productList: filteredList,
        });
    },
    productDetail: (req, res) => {
        let id = req.params.id;
        let product = productList.find((e) => e.id == id);

        res.render("products/details", {
            styles: "product_detail_styles",
            product: product,
        });
    },
    createProduct: (req, res) => {
        res.render("products/create", { styles: "register_login" });
    },
    saveProduct: (req, res) => {
        let product = req.body;
        product.id = productList.length + 1;
        setOffersAndPopular(req, product);
        if (req.file) {
            product.image = req.file.filename;
        }
        productList.push(product);
        fs.writeFileSync("./data/products-list.json", JSON.stringify(productList, null, 2));
        res.redirect("products");
    },
    editProduct: (req, res) => {
        let id = req.params.id;
        let product = productList.find((e) => e.id == id);
        res.render("products/edit", { styles: "register_login", product });
    },
    updateProduct: (req, res) => {
        let id = req.params.id;
        let index = productList.findIndex((e) => e.id == id);
        productList[index].brand = req.body.brand || productList[index].brand;
        productList[index].model = req.body.model || productList[index].model;
        productList[index].type = req.body.type || productList[index].type;
        productList[index].price = req.body.price || productList[index].price;
        productList[index].description = req.body.description || productList[index].description;
        if (req.file) {
            productList[index].image = req.file.filename;
        }
        setOffersAndPopular(req, productList[index]);
        //console.log(setOffersAndPopular(req, productList[index]));
        fs.writeFileSync("./data/products-list.json", JSON.stringify(productList, null, 2));
        res.redirect("/products");
    },
    deleteProduct: (req, res) => {
        let id = req.params.id;
        let index = productList.findIndex((e) => e.id == id);
        productList.splice(index, 1);
        fs.writeFileSync("./data/products-list.json", JSON.stringify(productList, null, 2));
        res.redirect("/products");
    }
};

function setOffersAndPopular(req, product) {
    if (req.body.offers == "on") {
        product.offers = true;
    } else {
        product.offers = false;
    }
    if (req.body.offers == "on") {
        product.popular = true;
    } else {
        product.popular = false;
    }
}

module.exports = productControllers;
