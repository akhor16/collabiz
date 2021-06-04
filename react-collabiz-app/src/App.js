import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import ProductsPage from "./components/ProductsPage";
import Navbar from "./components/Navbar";
import SingleProduct from "./components/SingleProduct";
import Pagination from "./components/Pagination";
import "./App.css";
import ReactJsPagination from "react-js-pagination";

import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const data = [
  {
    id: 1,
    title: "Generator",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 2,
    title: "Generator",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 3,
    title: "Generator",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 4,
    title: "Generator",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 5,
    title: "Generator",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 6,
    title: "Generator",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 7,
    title: "Generator",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 8,
    title: "Generator",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 9,
    title: "Generator",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 10,
    title: "Generator",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 11,
    title: "Generator",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 12,
    title: "Generator",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 13,
    title: "Generator",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 14,
    title: "Generator",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
  {
    id: 15,
    title: "Generator",
    description:
      "This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel, This is an electricity generator which works on diesel fuel,",
  },
];

const perPage = 5;

const App = () => {
  const [page, setPage] = useState(1);

  const visibleItems = data.slice(
    (page - 1) * perPage,
    (page - 1) * perPage + perPage
  );

  const onPageChange = (page) => {
    setPage(page);
  };

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/test">
            <div>avto</div>
          </Route>

          <Route path="/liquids">
            <div>
              <Header />
              <div className={"row_flex"}>
                <Navbar />
                {/* <ProductsPage /> */}
                <div className="page">
                  <div>
                    {visibleItems.map((x) => (
                      <SingleProduct key={x.id} product={x} />
                    ))}
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
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
