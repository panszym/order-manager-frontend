import React from "react";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { Footer } from "../pages/dashboard/Components/Footer";
import OrderItemsAll from "./Components/OrderItemsAll";



export const OrderItemsAllPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <OrderItemsAll />
      </div>
      <Footer />
    </div>
  );
};