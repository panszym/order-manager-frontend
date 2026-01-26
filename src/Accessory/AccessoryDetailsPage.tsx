import useArticles from "../hooks/useArticles";
import { Footer } from "../pages/dashboard/Components/Footer";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { AccessoryDetails } from "./Components/AccessoryDetails";

export const AccessoryDetailsPage = () => {
  const { error, isLoading } = useArticles();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <div className="container">
          {isLoading && <p>Ładowanie...</p>}
          {error && <p className="text-danger">{error}</p>}
          <AccessoryDetails />
        </div>
      </div>
      <Footer />
    </div>
  );
};
