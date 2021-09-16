import React, { useState, useEffect } from "react";
import { data } from "../../data";
import ReactJsPagination from "react-js-pagination";
import EachProduct from "../../components/EachProduct";

function Electronics(props) {
  const [page, setPage] = useState(1);
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const res = await fetch(
          "http://localhost:8000/api/items/?category=Electronics"
        );
        const todoList = await res.json();
        setItemsList(todoList);
      }
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []); //notice the empty array here

  const onPageChange = (page) => {
    setPage(page);
  };

  const perPage = 10;

  var filteredData = data.filter((item) => {
    return item.category === props.cat;
  });

  const visibleItems = () => {
    return itemsList.slice(
      (page - 1) * perPage,
      (page - 1) * perPage + perPage
    );
  };
  return (
    <>
      {visibleItems().map((x) => (
        <EachProduct key={x.id} product={x} />
      ))}
      <ReactJsPagination
        hideFirstLastPages
        prevPageText={"prev"}
        nextPageText={"next"}
        activePage={page}
        itemsCountPerPage={perPage}
        totalItemsCount={itemsList.length}
        pageRangeDisplayed={5}
        onChange={onPageChange}
      />
    </>
  );
}

export default Electronics;
