import { Link } from "react-router-dom";
import { ArticleList } from "../../components/ArticleList";
import useArticles from "../../hooks/useArticles";

const Article = () => {
  const { articles, error, isLoading } = useArticles();
  return (
    <div className="container">
      <div className="row mt-5">
            <div className="col-2">
              <div className="d-flex">
                <Link
                  to="/articles/new"
                  type="button"
                  className="btn btn-success"
                >
                  Nowy artykuł
                </Link>
              </div>
            </div>
            </div>
      {isLoading && <p> Ładowanie</p>}
      {error && <p> {error}</p>}
      <ArticleList articles={articles} />
    </div>
  );
};

export default Article;