import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import EachProduct from "./EachProduct";
// import Pagination from "./Pagination";
import "./ListProucts.css";
import ReactJsPagination from "react-js-pagination";

import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const allCategories = "/"
const electronics = "Electronics";
const liquids = "Liquids";
const naturalGoods = "NaturalGoods"
const chemicals = "Chemicals"

const data = [
  {
    id: 1,
    title: "Generator",
    category: electronics,
    img_src:"/resources/generator1.jpg",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 2,
    title: "Generator",
    category: electronics,
    img_src:"/resources/generator2.jpg",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 3,
    title: "Generator",
    category: electronics,
    img_src:"/resources/server1.jpg",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 4,
    title: "Generator",
    category: electronics,
    img_src:"/resources/server2.jpg",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 5,
    title: "floor",
    category: naturalGoods,
    img_src:"/resources/floor1.jpg",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 6,
    title: "floor",
    category: naturalGoods,
    img_src:"/resources/floor2.jpg",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 7,
    title: "Generator",
    category: electronics,
    img_src:"/resources/generator1.jpg",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 8,
    title: "Generator",
    category: "Electronics",
    img_src:"/resources/generator1.jpg",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 9,
    title: "Generator",
    category: "Electronics",
    img_src:"/resources/generator1.jpg",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 10,
    title: "Generator",
    category: "Electronics",
    img_src:"/resources/generator1.jpg",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 11,
    title: "Generator",
    category: "Electronics",
    img_src:"/resources/generator1.jpg",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 12,
    title: "Generator",
    category: "Electronics",
    img_src:"/resources/generator1.jpg",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 13,
    title: "Generator",
    category: "Electronics",
    img_src:"/resources/generator1.jpg",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 14,
    title: "Generator",
    category: "Electronics",
    img_src:"/resources/generator1.jpg",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 15,
    title: "Generator",
    category: "Electronics",
    img_src:"/resources/generator1.jpg",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
];

const perPage = 5;

const ListProucts = () => {
  const [page, setPage] = useState(1);

  const filterDataCategory = (cat) => {
    if (cat == allCategories) {
      return data;
    }
   
    return data.filter(function (item) {
      return item.category == cat;
    });
  
  }

  const visibleItems = (cat) => {
    return filterDataCategory(cat).slice(
      (page - 1) * perPage,
      (page - 1) * perPage + perPage
    );
  }

  const electronicsVisible = visibleItems(electronics);
  const liquidsVisible = visibleItems(liquids);
  const naturalVisible = visibleItems(naturalGoods);
  const chemicalsVisible = visibleItems(chemicals)
  const allCatsVisible = visibleItems(allCategories);

  const onPageChange = (page) => {
    setPage(page);
  };

  

  return (
    <div className="ListProucts">
      <Router>
        <Switch>
          
            <div>
              <Header />
              <div className={"row_flex"}>
                <Navbar />
                {/* <ProductsPage /> */}
                <div className="page">
                  <div>
                    <Route path="/liquids">
                      {liquidsVisible.map((x) => (
                        <EachProduct key={x.id} product={x} />
                      ))}
                    </Route>
                    <Route path="/Electronics">
                      {electronicsVisible.map((x) => (
                        <EachProduct key={x.id} product={x} />
                      ))}
                    </Route>
                    <Route path="/NaturalGoods">
                      {naturalVisible.map((x) => (
                        <EachProduct key={x.id} product={x} />
                      ))}
                    </Route>
                    <Route path="/Chemicals">
                      {chemicalsVisible.map((x) => (
                        <EachProduct key={x.id} product={x} />
                      ))}
                    </Route>
                    <Route exact path="/">
                      {allCatsVisible.map((x) => (
                        <EachProduct key={x.id} product={x} />
                      ))}
                    </Route>
                  </div>
                  <ReactJsPagination
                    hideFirstLastPages
                    prevPageText={"prev"}
                    nextPageText={"next"}
                    activePage={page}
                    itemsCountPerPage={perPage}
                    totalItemsCount={data.length}
                    pageRangeDisplayed={5}
                    onChange={onPageChange}
                  />
                </div>
              </div>
            </div>
          
        </Switch>
      </Router>
    </div>
  );
};

export default ListProucts;
