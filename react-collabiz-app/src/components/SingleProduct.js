import React from 'react'
import './SingleProduct.css';

function SingleProduct(props) {
    return (
        <div className = {"products"}>
            <img className = {"products_img"} src="/resources/generator1.jpg" />
            <div>
                <h4>{props.product.title + ' ' + props.product.id}</h4>
                <br />
                <text>{props.product.description} </text>
            </div>
        </div>
    )
}

export default SingleProduct





