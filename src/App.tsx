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
import { ProjectDetailsPage } from "./Project/ProjectDetailsPage";
import { UpdateProjectPage } from "./Project/UpdateProjectPage";
import { OrderDetailsPage } from "./Order/OrderDetailsPage";
import { OrderUpdatePage } from "./Order/OrderUpdatePage";
import { UserDetailsPage } from "./User/UserDetailsPage";
import { UpdateUserPage } from "./User/UpdateUserPage";
import { NewAccessoryPage } from "./Accessory/NewAccessoryPage";
import { NewArticlePage } from "./Article/NewArticlePage";
import { NewProjectPage } from "./Project/NewProjectPage";
import { NewOrderPage } from "./Order/NewOrderPage";
import { ProducerDetailsPage } from "./Producer/ProducerDetailsPage";
import { NewProducerPage } from "./Producer/NewProducerPage";
import { ProducerUpdatePage } from "./Producer/ProducerUpdatePage";
import { ProducerPage } from "./Producer/ProducerPage";
import { CategoryPage } from "./Category/CAtegoryPage";
import { CategoryDetailsPage } from "./Category/CategoryDetailsPage";
import { CategoryUpdatePage } from "./Category/CategoryUpdatePage";
import { NewCategoryPage } from "./Category/NewCategoryPage";

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
          <Route path="/producers" element={<ProducerPage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route
            path="/articles/orderCode/:orderCode"
            element={<ArticleDetailsPage />}
          />
          <Route
            path="/articles/edit/:orderCode"
            element={<UpdateArticlePage />}
          />
          <Route path="/articles/new" element={<NewArticlePage />} />
          <Route
            path="/producers/name/:name"
            element={<ProducerDetailsPage />}
          />
          <Route
            path="/producers/edit/:name"
            element={<ProducerUpdatePage />}
          />
          <Route path="/producers/new" element={<NewProducerPage />} />
          <Route
            path="/categories/categoryName/:categoryName"
            element={<CategoryDetailsPage />}
          />
          <Route
            path="/categories/edit/:categoryName"
            element={<CategoryUpdatePage />}
          />
          <Route path="/categories/new" element={<NewCategoryPage />} />
          <Route
            path="/accessories/orderCode/:orderCode"
            element={<AccessoryDetailsPage />}
          />
          <Route
            path="/accessories/edit/:orderCode"
            element={<UpdateAccessoryPage />}
          />
          <Route path="/accessories/new" element={<NewAccessoryPage />} />
          <Route
            path="/projects/projectCode/:projectCode"
            element={<ProjectDetailsPage />}
          />
          <Route
            path="/projects/edit/:projectCode"
            element={<UpdateProjectPage />}
          />
          <Route path="/projects/new" element={<NewProjectPage />} />
          <Route
            path="/orders/orderCode/:orderCode"
            element={<OrderDetailsPage />}
          />
          <Route path="/orders/edit/:orderCode" element={<OrderUpdatePage />} />
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/users/login/:login" element={<UserDetailsPage />} />
          <Route path="/users/edit/:login" element={<UpdateUserPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
