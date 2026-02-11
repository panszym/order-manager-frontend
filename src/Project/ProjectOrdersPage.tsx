import { Navbar } from "../pages/dashboard/Components/Navbar";
import { Footer } from "../pages/dashboard/Components/Footer";
import ProjectOrders from "./Components/ProjectOrders";

export const ProjectOrdersPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <ProjectOrders />
      </div>
      <Footer />
    </div>
  );
};
