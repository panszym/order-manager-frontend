import { Footer } from "../pages/dashboard/Components/Footer";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { NewOrder } from "./Components/NewOrder";


export const NewOrderPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <NewOrder />
      </div>
      <Footer />
    </div>
  );
};
