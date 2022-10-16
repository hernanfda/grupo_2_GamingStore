import React from 'react';
import LastProductInDb from './LastProductInDb';
import LastUserInDb from './LastUserInDb';
import CategoriesInDb from './CategoriesInDb';
import BrandsInDb from './BrandsInDb';


function ContentRowCenter(){
    return (
        <div className="row">
            
            <LastProductInDb />
            <LastUserInDb />
            <CategoriesInDb />
            <BrandsInDb />

        </div>
    )
}

export default ContentRowCenter;