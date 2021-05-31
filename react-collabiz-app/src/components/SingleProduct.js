import React from 'react'
import generator1 from "./resources/generator1.jpg"
import './SingleProduct.css';

function SingleProduct() {
    return (
        <div className = {"products"}>
            <img className = {"products_img"} src={generator1} />
            <div>
                <h4>Generator 1 </h4>
                <br />
                <text>This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, </text>
            </div>
        </div>
    )
}

export default SingleProduct





