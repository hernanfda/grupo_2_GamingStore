import React, { useState, useRef, useEffect } from "react";

import noPoster from "../assets/images/404.png";

function SearchProduct() {
	const [products, setProducts] = useState([]);
	const [keyword, setKeyword] = useState('');  
	const inputSearch = useRef(null)

    const ApiUrl = `/api/products/search`; 
    let model = '';
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: keyword  })
    };
    
    useEffect(() => {
        let model = keyword; 
		fetch(`${ApiUrl}`, requestOptions)
			.then(response => response.json())
			.then(products => setProducts(products.data)) 
			.catch(err => console.error(err))
		
	}, [keyword]);
 
	
	const handlerSubmitForm = (e) => {
		e.preventDefault();
		//console.log(inputSearch.current.value );
		if (inputSearch.current.value) {
			setKeyword(inputSearch.current.value)
			
		 } //else {
		// 	setInterval(() => {
        //         window.location.reload()
        //         console.log('pepe')
		// 	}, 1000);
		// 	setProducts([])
		// }
	}
    return (
        <div className="container-fluid">
                <>
                    <div className="row my-4">
                        <div className="col-12 col-md-6">
                            {/* Buscador */}
                            <form method="POST" action="products/search" onSubmit={handlerSubmitForm}>
                                <div className="form-group">
                                    <label htmlFor="">Search product by type:</label>
                                    <input type="text" className="form-control" ref={inputSearch} />
                                </div>
                                <button className="btn btn-info">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                    {products.length > 0 &&
                        keyword.length > 1 &&
                            products.map((product, i) => {
                                return (
                                    <div className="col-sm-6 col-md-3 my-4" key={i}>
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h5 className="m-0 font-weight-bold text-gray-800">{product.model}</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <img
                                                        className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                                        src={`http://localhost:4000/img/product-detail/${product.image}`}
                                                        // alt={product.name}
                                                        style={{ width: "90%", height: "400px", objectFit: "cover" }}
                                                    />
                                                </div>
                                                {/* <p>{product.Year}</p> */}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                {products.length === 0 &&
                    (
                        <div className="alert alert-warning text-center">We couldn't find a product</div>
                    )}
                </>
         
        </div>
    );
}

export default SearchProduct;
