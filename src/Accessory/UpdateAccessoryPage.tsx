import { Footer } from "../pages/dashboard/Components/Footer";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { AccessoryUpdate } from "./Components/AccessoryUpdate";

export const UpdateAccessoryPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <AccessoryUpdate />
      </div>
      <Footer />
    </div>
  );
};
