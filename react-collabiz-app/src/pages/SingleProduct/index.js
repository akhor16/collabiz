import React from "react";
import "./style.css";

function SingleProduct(props) {
  console.log(props.item.img_src);
  return (
    <div className={"single-products"}>
      <img className={"single-products_img"} src={props.item.img_src} />
      <div className={"details"}>
        <h4>{props.item.title}</h4>
        <br />
        <text>{props.item.description} </text>
      </div>
    </div>
  );
}

export default SingleProduct;
