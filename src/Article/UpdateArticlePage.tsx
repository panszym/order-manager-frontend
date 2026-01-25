
import { Footer } from "../pages/dashboard/Components/Footer";
import { Navbar } from "../pages/dashboard/Components/Navbar";
import { ArticleUpdate } from "./Components/ArticleUpdate";

export const UpdateArticlePage = () => {

  
  return(
    <div className="d-flex flex-column min-vh-100">
    <Navbar />
    <div className="flex-grow-1">
      <ArticleUpdate />
    </div>
    <Footer />
  </div>
);
}