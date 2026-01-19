import { ArticleList } from "../../components/ArticleList";
import { OrderList } from "../../components/OrderList";
import { ProjectList } from "../../components/ProjectsList";
import useArticles from "../../hooks/useArticles";
import useOrders from "../../hooks/useOrder";
import useProjects from "../../hooks/useProject";


const Dashboard = () => {
  const { articles, error, isLoading } = useArticles();
  return (
    <div>
      {isLoading && <p> Ładowanie</p>}
      {error && <p> {error}</p>}
      <ArticleList articles={articles} />;
    </div>
  );
};

export default Dashboard;
