const { urlencoded } = require("express");
const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Category = require("../database/models/Category");
const { request } = require("http");

const ProductList = db.Products;
const Categories = db.Categories;
const Brands = db.Brands;

const productControllers = {
    productCart: (req, res) => {
        res.render("products/cart", { styles: "product-cart" });
    },
    productList: async (req, res) => {
        await ProductList.findAll({
            include: ["brands", "categories"],
        })
            .then((productList, brands) => {
                console.log(productList);
                res.render("products/list", { styles: "product_detail_styles", productList, brands});
            })
            .catch((error) => {
                console.error(error);
            });
    },
    productFilter: async (req, res) => {
        let productType = req.params.type;
        await ProductList.findAll({
            include: [
                "brands",
                {
                    model: Categories,
                    as: "categories",
                    where: {
                        name: productType,
                    },
                },
            ],
        })
            .then((filteredList) => {
                res.render("products/list", {
                    styles: "product_detail_styles",
                    productList: filteredList,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    },
    productDetail: async (req, res) => {
        let id = req.params.id;
        await ProductList.findByPk(id)
            .then((product) => {
                res.render("products/details", {
                    styles: "product_detail_styles",
                    product,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    },
    createProduct: async (req, res) => {
        let brandForm = Brands.findAll();
        let categoryForm = Categories.findAll();

        Promise.all([categoryForm, brandForm])
            .then(([categories, brands]) => {
                //console.log(brands);
                return res.render("products/create", { styles: "register_login", categories, brands });
            })
            .catch((error) => {
                console.error(error);
            });
       
    },
    saveProduct: async (req, res) => {
       // setOffersAndPopular(req, product);
        await ProductList.create({
            brand: req.body.brand,
            model: req.body.model,
            type: req.body.type,
            price: req.body.price,
            description: req.body.description,
            offer: req.body.offer ? 1 : 0,
            popular: req.body.popular ? 1 : 0,
            image: req.file.filename,
        })
            .then(() => {
                res.json(data);
            })
            .catch((err) => {
                console.error(err);
            });
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
    },
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
