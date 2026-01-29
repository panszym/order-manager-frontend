import useOrders from "../hooks/useOrder";
import { Footer } from "../pages/dashboard/Components/Footer";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { OrderDetails } from "./Components/OrderDetails";

export const OrderDetailsPage = () => {
  const { error, isLoading } = useOrders();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <div className="container">
          {isLoading && <p>Ładowanie...</p>}
          {error && <p className="text-danger">{error}</p>}
          <OrderDetails />
        </div>
      </div>
      <Footer />
    </div>
  );
};
