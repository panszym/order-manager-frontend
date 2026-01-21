import { Navbar } from "../pages/dashboard/Components/Navbar";
import { Footer } from "../pages/dashboard/Components/Footer";
import User from "./Components/User";


export const UserPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <User />
      </div>
      <Footer />
    </div>
  );
};
