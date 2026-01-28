import { Footer } from "../pages/dashboard/Components/Footer";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { NewProject } from "./Components/NewProject";


export const NewProjectPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <NewProject />
      </div>
      <Footer />
    </div>
  );
};
