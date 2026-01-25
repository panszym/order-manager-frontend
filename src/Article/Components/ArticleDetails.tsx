import { Link, useNavigate, useParams } from "react-router-dom";
import "./Components.css";

import { useState } from "react";
import { deleteArticle } from "../../services/article-service";
import { useArticleDetail } from "../../hooks/useArticleDetail";
import { DeleteConfirm } from "../../components/DeleteConfirm";


export const ArticleDetails = () => {
  const navigate = useNavigate();
  const { orderCode } = useParams<{ orderCode: string }>();
  const { article, errors, isLoading, setLoader, setErrors } = useArticleDetail();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleCancel = () => {
    setShowDialog(false);
  };

  const handleConfirm = () => {
    setLoader(true);
    deleteArticle(orderCode!)
      .then((res) => {
        if (res) {
          navigate("/articles");
        }
      })
      .catch((error) => setErrors(error.response.data.messageor))
      .finally(() => {
        setLoader(false);
        setShowDialog(false);
      });
  };

  return (
    <div>
      <div className="container mt-1 d-flex justify-content-center align-items-center">
        {isLoading && <p>Ładowanie...</p>}
        {errors && <p className="text-danger">{errors}</p>}
      </div>
      <div className="container d-flex justify-content-center align-items-center py-2 mt-1">
        <h1>Dane artykuły</h1>
      </div>

      <div
        id="articleDetails-table"
        className="d-flex justify-content-center align-items-center py-1"
      >
        <div className="card">
          <div className="card-body py-2">
            <table className="table table-responsive">
              <tbody>
                <tr>
                  <th>Numer katalogowy:</th>
                  <td>{article ? article.orderCode : "N/A"}</td>
                </tr>
                <tr>
                  <th>Opis:</th>
                  <td>{article ? article.title : "N/A"}</td>
                </tr>
                <tr>
                  <th>Producent:</th>
                  <td>{article?.producer?  article.producer : "N/A"}</td>
                </tr>
                <tr>
                  <th>Kategoria:</th>
                  <td>{article?.category? article.category : "N/A"}</td>
                </tr>
                <tr>
                  <th>Opis:</th>
                  <td>{article?.description? article.description : "N/A"}</td>
                </tr>
                <tr>
                  <th>Prąd nominalny:</th>
                  <td>{article?.nominalCurrent? article.nominalCurrent : "N/A"}</td>
                </tr>
                <tr>
                  <th>Nominalne napięcie:</th>
                  <td>{article?.nominalVoltage? article.nominalVoltage : "N/A"}</td>
                </tr>
                <tr>
                  <th>Wysokość:</th>
                  <td>{article?.height? `${article.height} mm `: "N/A"}</td>
                </tr>
                <tr>
                  <th>Szerokość:</th>
                  <td>{article?.width? `${article.width} mm `: "N/A"}</td>
                </tr>
                <tr>
                  <th>Wysokość:</th>
                  <td>{article?.depth? `${article.depth} mm `: "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container d-flex align-items-center  justify-content-center mb-2">
        <Link
          to="/articles"
          type="button"
          className="btn btn-sm btn-secondary mx-2"
        >
          Wróć do listy
        </Link>
        <Link
          to={`/articles/edit/${article?.orderCode}`}
          className="btn btn-sm btn-primary"
        >
          Edytuj
        </Link>
        <button
          type="button"
          className="btn btn-sm btn-danger mx-2"
          onClick={() => setShowDialog(true)}
        >
          Usuń artykuł
        </button>
      </div>
      <DeleteConfirm
        message="Czy chcesz usunąć ten artykuł?"
        show={showDialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
