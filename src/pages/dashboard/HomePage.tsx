import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";



export const HomePage = () => {
    return(
      <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        Elmar-Automatyka
      </div>
      <Footer />
    </div>
    );
}