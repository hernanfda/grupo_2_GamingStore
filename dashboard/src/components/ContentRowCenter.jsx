import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';


function ContentRowCenter(){
    return (
        <div className="row">
            
            <LastProductInDb />
            <CategoriesInDb />

        </div>
    )
}

export default ContentRowCenter;