import { Navbar } from "../pages/dashboard/Components/Navbar";
import { Footer } from "../pages/dashboard/Components/Footer";
import Producer from "./Components/Producer";

export const ProducerPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Producer />
      </div>
      <Footer />
    </div>
  );
};
