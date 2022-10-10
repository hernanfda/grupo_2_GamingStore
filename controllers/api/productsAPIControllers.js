// const { urlencoded } = require("express");
// const fs = require("fs");
// const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
// const { request } = require("http");
const { validationResult } = require("express-validator");
const { request } = require("express");

const ProductList = db.Products;
const Categories = db.Categories;
const Brands = db.Brands;

const productsApiControllers = {

    productList: (req, res) => {
        ProductList.findAll({
            include: ["brands", "categories"],
        })
            .then(productList => {
                let response = {
                    meta: {
                        status: 200,
                        url: "api/products",
                        total: productList.length
                    },
                    data: productList,
                };
                res.json(response);
            })

            .catch((error) => {
                console.error(error);
            });
    },
    productFilter: (req, res) => {
        let productType = req.params.type;
        ProductList.findAll({
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
                let response = {
                    meta: {
                        status: 200,
                        url: "api/products/list/:type",
                        total: filteredList.length
                    },
                    data: filteredList,
                }
                res.json(response);
            })
            .catch((error) => {
                console.error(error);
            });
    },
    productDetail: (req, res) => {
        let id = req.params.id;
        ProductList.findByPk(id, { include: ["brands", "categories"] })
            .then((product) => {
                let response = {
                    meta: {
                        status: 200,
                        url: 'api/products/details/:id'
                    },
                    data: product
                }
                res.json(response);
            })
            .catch((error) => {
                console.error(error);
            });
    },
    //save product dude, pero validationResult aca en realidad no se si iria por ser APi
    saveProduct:  (req, res) => {
        ProductList.create({
                brand_id: req.body.brand_id,
                model: req.body.model,
                price: req.body.price,
                image: req.file.filename,
                offer: req.body.offer ? 1 : 0,
                description: req.body.description,
                popular: req.body.popular ? 1 : 0,
                category_id: req.body.category_id,
            })
                .then((confirm) => {
                    let response;
                    if (confirm){
                        response = {
                            meta: {
                                status: 200,
                                total: confirm.length,
                                url: 'api/products/create'
                            },
                            data: confirm
                        }
                    } else {
                        response = {
                            meta: {
                                status: 200,
                                total: confirm.length,
                                url: 'api/products/create'
                            },
                            data: confirm
                        }
                    }
                    res.json(response);
                })
                .catch((err) => {
                    console.error(err);
                });
    },
    updateProduct: async (req, res) => {
        let id = req.params.id;
        let file = req.file;
        let errors = validationResult(req);
        if (errors.errors.length == 0) {
            await ProductList.update(
                {
                    brand_id: req.body.brand_id,
                    model: req.body.model,
                    price: req.body.price,
                    image: file ? req.file.filename : req.body.image,
                    offer: req.body.offer ? 1 : 0,
                    description: req.body.description,
                    popular: req.body.popular ? 1 : 0,
                    category_id: req.body.category_id,
                },
                { where: { id: id } }
            )
                .then(() => {
                    res.redirect("/products");
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            let productForm = ProductList.findByPk(id, { include: ["brands", "categories"] });
            let brandForm = Brands.findAll();
            let categoryForm = Categories.findAll();
            let selected = "selected";
            Promise.all([categoryForm, brandForm, productForm])
                .then(([categories, brands, product]) => {
                    return res.render("products/edit", {
                        styles: "register_login",
                        errors: errors.mapped(),
                        old: req.body,
                        categories,
                        brands,
                        product,
                        selected,
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    },
    deleteProduct: async (req, res) => {
        let id = req.params.id;
        await ProductList.destroy({ where: { id: id } });
        res.redirect("/products");
    },
};

module.exports = productsApiControllers;
