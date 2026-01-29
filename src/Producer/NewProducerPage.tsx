import { Footer } from "../pages/dashboard/Components/Footer";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { NewProducer } from "./Components/NewProducer";


export const NewProducerPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <NewProducer />
      </div>
      <Footer />
    </div>
  );
};
