import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import imagenFondo from "../assets/images/404.png";
import CardProduct from "./CardProduct";

function LastProductInDb() {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch("/api/products/lastone")
            .then((response) => response.json())
            .then((product) => setproducts(product.data));
    }, []);

    return (
        <React.Fragment>
           
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img
                                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                style={{ width: 15 + "rem" }}
                                src={`/img/product-detail/${products.image}`}
                                alt=" Img - Last ProductInDb "
                            />
                        </div>
                        <div>
                            <p> {products.model} </p>
                            {/* <p>RatinProducts.rating}</p>
                            <p>Length: {movies.length}</p>
                            <p>Awards: {movies.awards}</p> */}
                            <Link to={{ pathname: `CardProduct/${products.id}`, state: {product: products} }} className="btn btn-danger" rel="nofollow">
                                View product detail
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </ React.Fragment>
    );
}

export default LastProductInDb;
