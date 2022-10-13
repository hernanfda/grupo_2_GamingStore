// const { urlencoded } = require("express");
// const fs = require("fs");
// const path = require("path");
// const { request } = require("http");
const { validationResult } = require("express-validator");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { request } = require("express");

const ProductList = db.Products;
const Categories = db.Categories;
const Brands = db.Brands;

const productsApiControllers = {
    productList: (req, res) => {
        ProductList.findAll({
            include: ["brands", "categories"],
        })
            .then((productList) => {
                let response = {
                    meta: {
                        status: 200,
                        url: "/api/products",
                        total: productList.length,
                    },
                    data: productList.map(product => {
                        product = {
                            id: product.id,
                            name: product.brands.name + ' ' + product.model,
                            description: product.description,
                            price: product.price,
                            url: `/api/products/details/${product.id}`,
                        }
                        return product
                    }),
                };
                res.json(response);
            })

            .catch((error) => {
                res.send(error);
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
                        total: filteredList.length,
                    },
                    data: filteredList,
                };
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
                product.image = `/img/product-detail/${product.image}`;
                let response = {
                    meta: {
                        status: 200,
                        url: `/api/products/details/${product.id}`,
                    },
                    data: product,
                };
                res.json(response);
            })
            .catch((error) => {
                console.error(error);
            });
    },
    searchProduct: (req, res) => { 
        ProductList.findAll({ where: { model: { [Op.like]: '%' + req.body.model + '%' } } })
            .then(products => {
                let response = {
                    meta: {
                        status: 200,
                        founded: products.length
                    },
                    data: products
                }
                res.json(response);
            })
    },
    listCategory: (req, res) => {
        Categories.findAll()
            .then(categories => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: categories.length,
                        url: '/api/categories'
                    },
                    data: categories
                }
                res.json(respuesta);
            })
    },
    lastOneInDb: (req, res) => {
        ProductList.findAll({
            include: ["brands", "categories"],
            order: [["id", "DESC"]],
            limit: 1,
        })
            .then((products) => {
                let response = {
                    meta: {
                        status: 200,
                        url: "/api/products/lastone",
                    },
                    data: products[0],
                };
                res.json(response);
            })
            .catch((err) => res.send(err));
    },
    saveProduct: (req, res) => {
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
                if (confirm) {
                    response = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: "/api/products/create",
                        },
                        data: confirm,
                    };
                } else {
                    response = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: "/api/products/create",
                        },
                        data: confirm,
                    };
                }
                res.json(response);
            })
            .catch((err) => {
                res.send(err);
            });
    },
    updateProduct: (req, res) => { //PROBARRRRRRRRR 
        let file = req.file;
        let id = req.params.id;
        ProductList.update(
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
            .then((confirm) => {
                let response;
                if (confirm) {
                    response = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: "/api/products/create",
                        },
                        data: confirm,
                    };
                } else {
                    response = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: "/api/products/update",
                        },
                        data: confirm,
                    };
                }
                res.json(response);
            })
            .catch((err) => {
                res.send(err);
            });
    },
    deleteProduct: (req, res) => {
        let id = req.params.id;
        ProductList.destroy({ where: { id: id } })
            .then((confirm) => {
                let response;
                if (confirm) {
                    response = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            id: id,
                            url: "/api/products/delete/:id",
                        },
                        data: confirm,
                    };
                } else {
                    response = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: "/api/products/delete/:id",
                        },
                        data: confirm,
                    };
                }
                res.json(response);
            })
            .catch((err) => {
                res.send(err);
            });
    },
};

module.exports = productsApiControllers;
