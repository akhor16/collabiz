import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect, Component } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import EachProduct from "./components/EachProduct";
import SingleProduct from "./pages/SingleProduct";
import Electronics from "./pages/Electronics";
import ExploreItems from "./pages/ExploreItems";
import AddProduct from "./components/AddProduct";
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

const App = (props) => {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [activeItem, setActiveItem] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const [itemsList, setItemsList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    try {
      async function fetchData() {
        const res = await fetch("http://localhost:8000/api/items/");
        const todoList = await res.json();
        setItemsList(todoList);
      }
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []); //notice the empty array here

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
          <Route path="/AddProduct">
            <AddProduct />
          </Route>
          <div className={"row_flex"}>
            <Navbar />
            <div className="page">
              <div>
                <Route path="/Liquids">
                  <Electronics cat={"LIQUIDS"} />
                </Route>
                <Route path="/Electronics">
                  <Electronics cat={"ELECTRONICS"} />
                </Route>
                <Route path="/NaturalGoods">
                  <Electronics cat={"NATURAL GOODS"} />
                </Route>
                <Route path="/Chemicals">
                  <Electronics cat={"CHEMICALS"} />
                </Route>
                <Route exact path="/">
                  <ExploreItems cat={"/"} data={itemsList} />
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

// const App = () => {

//     renderItems = () => {
//       const { viewCompleted } = this.state;
//       const newItems = this.state.todoList.filter(
//         item => item.completed === viewCompleted
//       );
//       return newItems.map(item => (
//         <li
//           key={item.id}
//           className="list-group-item d-flex justify-content-between align-items-center"
//         >
//           <span
//             className={`todo-title mr-2 ${
//               this.state.viewCompleted ? "completed-todo" : ""
//             }`}
//             title={item.description}
//             >
//               {item.title}
//             </span>
//         </li>
//       ));
//     };

//       return (
//         <main className="content">
//         <div className="row">
//           <div className="col-md-6 col-sm-10 mx-auto p-0">
//             <div className="card p-3">
//               <ul className="list-group list-group-flush">
//                 {this.renderItems()}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </main>
//       )
//     }

// export default App;
