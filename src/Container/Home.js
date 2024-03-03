import React from "react";
import Header from "../Components/Header";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./Dashboard";
import Product from "./Product";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Success from "./Success";

const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout/">
          <Route path="" element={<Checkout/>}/>
          <Route path=":id" element={<Checkout/>}/>
        </Route>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </div>
  );
};

export default Home;
