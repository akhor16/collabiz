import React from 'react'
import './EachProduct.css';

function EachProduct(props) {
    return (
        <div className = {"products"}>
            <img className = {"products_img"} src={props.product.img_src} />
            <div>
                <h4>{props.product.title + ' ' + props.product.id}</h4>
                <br />
                <text>{props.product.description} </text>
            </div>
        </div>
    )
}

export default EachProduct





