import useAccessory from "../hooks/useAccessory";
import { Footer } from "../pages/dashboard/Components/Footer";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { ClientDetails } from "./components/ClientDetails";

export const ClientDetailsPage = () => {
  const { error, isLoading } = useAccessory();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <div className="container">
          {isLoading && <p>Ładowanie...</p>}
          {error && <p className="text-danger">{error}</p>}
          <ClientDetails />
        </div>
      </div>
      <Footer />
    </div>
  );
};
