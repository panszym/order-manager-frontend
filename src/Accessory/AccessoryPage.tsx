import { Navbar } from "../pages/dashboard/Components/Navbar";
import { Footer } from "../pages/dashboard/Components/Footer";
import Accessory from "./Components/Accessory";

export const AccessoryPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Accessory />
      </div>
      <Footer />
    </div>
  );
};
