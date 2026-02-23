import { Footer } from "../pages/dashboard/Components/Footer";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import OrderAddProduct from "./Components/OrderAddProduct";

export const OrderAddProductPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <OrderAddProduct />
      </div>
      <Footer />
    </div>
  );
};
