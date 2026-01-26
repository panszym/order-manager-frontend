import Dashboard from "./pages/dashboard/Dashboard";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/dashboard/HomePage";
import { ArticlePage } from "./Article/ArticlePage";
import { OrderPage } from "./Order/OrderPage";
import { AccessoryPage } from "./Accessory/AccessoryPage";
import { ProjectPage } from "./Project/ProjectPage";
import { UserPage } from "./User/UserPage";
import { ArticleDetailsPage } from "./Article/ArticleDetailsPage";
import { UpdateArticlePage } from "./Article/UpdateArticlePage";
import { AccessoryDetailsPage } from "./Accessory/AccessoryDetailsPage";
import { UpdateAccessoryPage } from "./Accessory/UpdateAccessoryPage";

Dashboard;
const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/accessories" element={<AccessoryPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/articles/orderCode/:orderCode" element={<ArticleDetailsPage />} />
          <Route path="/articles/edit/:orderCode" element={<UpdateArticlePage />} />
          <Route path="/accessories/orderCode/:orderCode" element={<AccessoryDetailsPage />} />        
          <Route path="/accessories/edit/:orderCode" element={<UpdateAccessoryPage />} />        </Routes>
      </div>
    </div>
  );
};

export default App;
