import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react'
import Header from "./components/Header";
import ProductsPage from "./components/ProductsPage"
import Navbar from './components/Navbar'
import SingleProduct from './components/SingleProduct'
import './App.css'


function App() {
  return (
     <div className="app">
     <Router>
       <Switch>
         <Route path="/">
           <Header />
          <div className={"row_flex"}>
          <Navbar />
           {/* <ProductsPage /> */}
           <div>
           <SingleProduct />
           <SingleProduct />
           <SingleProduct />
           <SingleProduct />
           <SingleProduct />
           </div>
          </div>
           

         </Route>
       </Switch>
     </Router>
   </div>
  );
}

// class App extends React.Component{
//   render() {
//     return <h1> Hello from a class</h1>
//   }
// }

export default App;
