import React, { useState } from "react";
import ReactJsPagination from "react-js-pagination";
import EachProduct from "../../components/EachProduct";

function ExploreItems(props) {
  const [page, setPage] = useState(1);

  const onPageChange = (page) => {
    setPage(page);
  };

  const perPage = 10;

  const visibleItems = () => {
    return props.data.slice(
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
        totalItemsCount={props.data.length}
        pageRangeDisplayed={5}
        onChange={onPageChange}
      />
    </>
  );
}

export default ExploreItems;
