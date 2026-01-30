import useCategory from "../hooks/useCategory";
import { Footer } from "../pages/dashboard/Components/Footer";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { CategoryDetails } from "./components/CategoryDetails";

export const CategoryDetailsPage = () => {
  const { error, isLoading } = useCategory();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <div className="container">
          {isLoading && <p>Ładowanie...</p>}
          {error && <p className="text-danger">{error}</p>}
          <CategoryDetails />
        </div>
      </div>
      <Footer />
    </div>
  );
};
