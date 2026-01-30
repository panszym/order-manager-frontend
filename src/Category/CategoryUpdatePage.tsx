import { Footer } from "../pages/dashboard/Components/Footer";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { CategoryUpdate } from "./components/CategoryUpdate";

export const CategoryUpdatePage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <CategoryUpdate />
      </div>
      <Footer />
    </div>
  );
};
