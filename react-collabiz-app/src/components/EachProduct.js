import React from "react";
import "./EachProduct.css";
import { useHistory } from "react-router-dom";

function EachProduct(props) {
  const history = useHistory();

  const routeChange = () => {
    let path = `SingleProduct`;
    history.push(path);
  };

  return (
    <div className={"products"}>
      <img
        className={"products_img"}
        src={props.product.img_src}
        onClick={routeChange}
      />
      <div>
        <h4>{props.product.title + " " + props.product.id}</h4>
        <br />
        <text>{props.product.description} </text>
      </div>
    </div>
  );
}

export default EachProduct;
