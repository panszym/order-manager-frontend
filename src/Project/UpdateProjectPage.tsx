import { Footer } from "../pages/dashboard/Components/Footer";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { ProjectUpdate } from "./Components/ProjectUpdate";

export const UpdateProjectPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <ProjectUpdate />
      </div>
      <Footer />
    </div>
  );
};
