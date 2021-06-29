import React, { useState } from "react";
import { data } from "../../data";
import ReactJsPagination from "react-js-pagination";
import EachProduct from "../../components/EachProduct";

function Electronics(props) {
  const [page, setPage] = useState(1);
  const filterDataCategory = () => {
    if (props.cat == "/") {
      return data;
    }

    return data.filter(function (item) {
      return item.category == props.cat;
    });
  };

  const onPageChange = (page) => {
    setPage(page);
  };

  const perPage = 5;

  var filteredData = filterDataCategory();

  const visibleItems = () => {
    return filterDataCategory().slice(
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
        itemsCountPerPage={5}
        totalItemsCount={filteredData.length}
        pageRangeDisplayed={5}
        onChange={onPageChange}
      />
    </>
  );
}

export default Electronics;
