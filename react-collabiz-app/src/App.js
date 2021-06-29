import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import EachProduct from "./components/EachProduct";
import SingleProduct from "./pages/SingleProduct";
import Electronics from "./pages/Electronics";
import "./App.css";
import ReactJsPagination from "react-js-pagination";
import { data } from "./data";

import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const allCategories = "/";
const electronics = "Electronics";
const liquids = "Liquids";
const naturalGoods = "NaturalGoods";
const chemicals = "Chemicals";

const perPage = 5;

const App = () => {
  const [page, setPage] = useState(1);

  const filterDataCategory = (cat) => {
    if (cat == allCategories) {
      return data;
    }

    return data.filter(function (item) {
      return item.category == cat;
    });
  };

  const visibleItems = (cat) => {
    return filterDataCategory(cat).slice(
      (page - 1) * perPage,
      (page - 1) * perPage + perPage
    );
  };

  const electronicsVisible = visibleItems(electronics);
  const liquidsVisible = visibleItems(liquids);
  const naturalVisible = visibleItems(naturalGoods);
  const chemicalsVisible = visibleItems(chemicals);
  const allCatsVisible = visibleItems(allCategories);

  const onPageChange = (page) => {
    setPage(page);
  };

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/SingleProduct">
            <SingleProduct item={allCatsVisible[1]} />
          </Route>
          <div className={"row_flex"}>
            <Navbar />
            <div className="page">
              <div>
                <Route path="/Liquids">
                  <Electronics cat={"Liquids"} />
                </Route>
                <Route path="/Electronics">
                  <Electronics cat={"Electronics"} />
                </Route>
                <Route path="/NaturalGoods">
                  <Electronics cat={"NaturalGoods"} />
                </Route>
                <Route path="/Chemicals">
                  <Electronics cat={"Chemicals"} />
                </Route>
                <Route exact path="/">
                  <Electronics cat={"/"} />
                </Route>
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
