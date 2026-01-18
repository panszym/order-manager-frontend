import { ArticleList } from "../../components/ArticleList";
import useArticles from "../../hooks/useArticles";

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
