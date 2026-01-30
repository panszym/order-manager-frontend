import { Navbar } from "../pages/dashboard/Components/Navbar";
import { Footer } from "../pages/dashboard/Components/Footer";
import Category from "./components/Category";

export const CategoryPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Category />
      </div>
      <Footer />
    </div>
  );
};
