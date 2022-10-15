import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow';




function Product (){
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(products => setProducts(products.data))
            .catch(err => console.error(err)) 
    }, [products])
    
    
    return (
        <React.Fragment>
    <div className='container'>
        <div className="card shadow mb-4">
        <h1 className="h3 mb-2 text-gray-800">All Products in the Database</h1>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Descripcion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => { 
                                    return <ProductRow {...product} key={index} >
                                        </ProductRow>
                                })
                           }
                        </tbody>
                    </table>
                </div>
            </div>
                </div>
                </div>
    </React.Fragment>
    )
}

export default Product;