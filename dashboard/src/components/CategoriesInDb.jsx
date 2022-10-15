import React, { useState, useEffect } from "react";
import Category from "./Category";

function CategoriesInDb() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/products/categories')
      .then(res => res.json())
      .then(category => setCategories(category.data))
      .catch(err => console.error(err))

  }, [])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categories in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {
              categories.map((category, i) => {
                return <Category {...category } key={i} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
