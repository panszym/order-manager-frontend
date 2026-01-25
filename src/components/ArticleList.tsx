import { Link } from "react-router-dom";
import type { Article } from "../model/ArticleModel";

export const ArticleList: React.FC<{ articles: Article[] }> = (props) => {
  return (
    <>
      {props.articles.map((article) => (
        <Link
        key={article.orderCode}
                to={`/articles/orderCode/${article.orderCode}`}
                style={{ textDecoration: "none" }}>
        <div
          key={article.id}
          className="card mt-3 shadow p-3 mb-3 bg-body rounded"
        >
          <div className="row g-0">
            <div className="col-md-2 d-flex justify-content-center align-items-center">
              <div className="container d-flex justify-content-center align-items-center">
                <p>
                  Numer artykułu: <br /> {article.orderCode}
                  <br />
                  Producent: <br /> {article.producer}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h4 className="card-title">{article.title}</h4>
                <h6>{article.description}</h6>
                <div className="d-flex justify-content-between py-1">
                  Prąd nominalny: {article.nominalCurrent}A
                </div>
                <div className="d-flex justify-content-between py-1">
                  Napięcie nominalne: {article.nominalVoltage}
                </div>
                <div className="d-flex justify-content-between px-5 py-2 border-bottom border-5">
                  <div>Wysokość: {article.height}mm</div>
                  // <div>Szerokość: {article.width}mm</div>
                  // <div>Głębokość: {article.depth}mm</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <div className="d-flex align-items-center ms-auto">
                <span className="me-2">Kategoria:</span>
                <span className="badge rounded-pill app-primary-bg-color">
                  {article.category}
                </span>
              </div>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </>
  );
};
