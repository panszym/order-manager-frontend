import { Footer } from "../pages/dashboard/Components/Footer";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { NewCategory } from "./components/NewCategory";

export const NewCategoryPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <NewCategory />
      </div>
      <Footer />
    </div>
  );
};
