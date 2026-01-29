import { Footer } from "../pages/dashboard/Components/Footer";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { ProducerUpdate } from "./Components/ProducerUpdate";

export const ProducerUpdatePage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <ProducerUpdate />
      </div>
      <Footer />
    </div>
  );
};
