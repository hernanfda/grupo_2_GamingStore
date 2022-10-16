import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";

/*  Cada set de datos es un objeto literal */

function ContentKpisProducts() {
    /* <!-- Movies in DB --> */
    const [products, setProducts] = useState(0);
    useEffect(() => {
        fetch("/api/products")
            .then((response) => response.json())
            .then((products) => setProducts(products.meta.total))
            .catch((err) => console.error(err));
    }, []);
    const [categories, setCategories] = useState(0);
    useEffect(() => {
        fetch("/api/products/categories")
            .then((response) => response.json())
            .then((categories) => setCategories(categories.meta.total))
            .catch((err) => console.error(err));
    }, []);
    const [users, setUsers] = useState(0);
    useEffect(() => {
        fetch("/api/users")
            .then((response) => response.json())
            .then((users) => setUsers(users.meta.total))
            .catch((err) => console.error(err));
    }, []);

    let productsInDB = {
        title: "Products in Data Base",
        color: "success",
        cuantity: products,
        icon: "fa-clipboard-list",
    };
    let categoriesInDB = {
        title: "categories in Data Base",
        color: "danger",
        cuantity: categories,
        icon: "fa-award",
    };
    let usersInDB = {
        title: "Users in Data Base",
        color: "warning",
        cuantity: users,
        icon: "fa-user-check",
    };
    let kpis = [productsInDB, categoriesInDB, usersInDB];
    return (
        <div className="container">
            <div className="row ">
                {kpis.map((card, i) => {
                  return  <SmallCard {...card} key={ i } />;
                })}
            </div>
        </div>
    );
}

export default ContentKpisProducts;
