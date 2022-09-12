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
                //console.log(productList);
                res.render("products/list", { styles: "product_detail_styles", productList, brands });
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
        await ProductList.findByPk(id, { include: ["brands"] })
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
        await ProductList.create({
            brand_id: req.body.brand_id,
            model: req.body.model,
            price: req.body.price,
            image: req.file.filename,
            offer: req.body.offer ? 1 : 0,
            description: req.body.description,
            popular: req.body.popular ? 1 : 0,
            category_id: req.body.category_id,
        })
            .then((data) => {
                res.redirect("products");
            })
            .catch((err) => {
                console.error(err);
            });
    },
    editProduct: async (req, res) => {
        let id = req.params.id;
        let productForm = ProductList.findByPk(id, { include: ["brands", "categories"] });
        let brandForm = Brands.findAll();
        let categoryForm = Categories.findAll();
        let selected = "selected";
        Promise.all([categoryForm, brandForm, productForm])
            .then(([categories, brands, product]) => {
                return res.render("products/edit", { styles: "register_login", categories, brands, product, selected });
            })
            .catch((error) => {
                console.error(error);
            });
    },
    updateProduct: async (req, res) => {
        let id = req.params.id;
        let product = ProductList.findByPk(id, { include: ["brands", "categories"] });
        await ProductList.update(
            {
                brand_id: req.body.brand_id,
                model: req.body.model,
                price: req.body.price,
                // image: req.file.filename, <-- ASI LO TIENE ROCKO
                image: req.body.image ? req.body.image : product.image,
                offer: req.body.offer ? 1 : 0,
                description: req.body.description,
                popular: req.body.popular ? 1 : 0,
                category_id: req.body.category_id,
            },
            { where: { id: id } }
        )
            .then((data) => {
                res.redirect("/products");
            })
            .catch((err) => {
                console.error(err);
            });

        // fs.writeFileSync("./data/products-list.json", JSON.stringify(productList, null, 2));
        // res.redirect("/products");
    },
    deleteProduct: (req, res) => {
        let id = req.params.id;
        let index = productList.findIndex((e) => e.id == id);
        productList.splice(index, 1);
        fs.writeFileSync("./data/products-list.json", JSON.stringify(productList, null, 2));
        res.redirect("/products");
    },
};

module.exports = productControllers;
