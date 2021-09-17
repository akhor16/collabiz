import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./style.css";

function SingleProduct(props) {
  const [singleItem, setSingleItem] = useState([]);
  console.log("propsssssssss", props);
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    var id = queryParams.get("id");
    try {
      async function fetchData() {
        var data_url = "http://localhost:8000/api/items?id=" + id;
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
