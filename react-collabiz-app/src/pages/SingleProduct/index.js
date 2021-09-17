import React, { useState, useEffect } from "react";
import "./style.css";

function SingleProduct(props) {
  const [singleItem, setSingleItem] = useState([]);
  console.log("propsssssssss", props);
  useEffect(() => {
    try {
      async function fetchData() {
        var data_url = "http://localhost:8000/api/items?id=" + 2;
        const res = await fetch(data_url);
        const item = await res.json();
        setSingleItem(item);
      }
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []); //notice the empty array here

  return (
    <div className={"single-products"}>
      <img className={"single-products_img"} src={singleItem.photoUrl} />
      <div className={"details"}>
        <h4>{singleItem.title}</h4>
        <br />
        <text>{singleItem.description} </text>
      </div>
    </div>
  );
}

export default SingleProduct;
