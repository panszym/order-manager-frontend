
import { Footer } from "../pages/dashboard/Components/Footer";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { ArticleUpdate } from "./Components/ArticleUpdate";
import { NewArticle } from "./Components/NewArticle";

export const NewrticlePage = () => {

  
  return(
    <div className="d-flex flex-column min-vh-100">
    <Navbar />
    <div className="flex-grow-1">
      <NewArticle />
    </div>
    <Footer />
  </div>
);
}