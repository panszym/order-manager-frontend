import { Footer } from "../pages/dashboard/Components/Footer";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { ClientUpdate } from "./components/ClientUpdate";

export const ClientUpdatePage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <ClientUpdate />
      </div>
      <Footer />
    </div>
  );
};
