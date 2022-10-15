import React from 'react';


const ProductRow = (props) => {
    return (
        <React.Fragment>
            <tr>
                    <td>{ props.id }</td>
                    <td>{ props.name }</td>
                    <td>{ props.price }</td>
                    <td>{ props.description }</td>
            </tr>
        </React.Fragment>)
    };
        

export default ProductRow;