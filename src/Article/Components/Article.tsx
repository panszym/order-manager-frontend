import { ArticleList } from "../../components/ArticleList";
import useArticles from "../../hooks/useArticles";

const Article = () => {
  const { articles, error, isLoading } = useArticles();
  return (
    <div className="container">
      {isLoading && <p> Ładowanie</p>}
      {error && <p> {error}</p>}
      <ArticleList articles={articles} />
    </div>
  );
};

export default Article;