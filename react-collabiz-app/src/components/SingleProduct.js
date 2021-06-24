import React from 'react'
import './SingleProduct.css';

function SingleProduct(props) {
    console.log(props.item.img_src)
    return (
        <div className = {"products"}>
            <img className = {"products_img"} src={props.item.img_src} />
            <div className = {"details"}>
                <h4 >{props.item.title + ' ' + props.item.id}</h4>
                <br />
                <text>{props.item.description} </text>
            </div>
        </div>
    )
}

export default SingleProduct
