import React, { useState, useEffect } from "react";
import Brand from "./Brand";

function BrandsInDb() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch('/api/products/brands')
      .then(res => res.json())
      .then(brand => setBrands(brand.data))
      .catch(err => console.error(err))

  }, [])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Brands in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {
              brands.map((brand, i) => {
                return <Brand {...brand } key={i} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandsInDb;
