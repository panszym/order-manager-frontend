import React from "react";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { Footer } from "../pages/dashboard/Components/Footer";
import Order from "./Components/Order";



export const OrderPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Order />
      </div>
      <Footer />
    </div>
  );
};