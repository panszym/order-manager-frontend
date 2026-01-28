import { Footer } from "../pages/dashboard/Components/Footer";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { NewAccessory } from "./Components/NewAccessory";

export const NewAccessoryPage = () => {
  return (
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <NewAccessory />
        </div>
        <Footer />
      </div>
    );
  };
