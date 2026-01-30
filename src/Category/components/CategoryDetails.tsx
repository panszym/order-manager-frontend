import { Link, useNavigate, useParams } from "react-router-dom";
import "./Components.css";
import { useState } from "react";
import { DeleteConfirm } from "../../components/DeleteConfirm";
import { useCategoryDetails } from "../../hooks/useCategoryDetails";
import { deleteCategory } from "../../services/category-service";

export const CategoryDetails = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams<{ categoryName: string }>();
  const { categories, errors, isLoading, setLoader, setErrors } =
    useCategoryDetails();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleCancel = () => {
    setShowDialog(false);
  };

  const handleConfirm = () => {
    setLoader(true);
    deleteCategory(categoryName!)
      .then((res) => {
        if (res) {
          navigate("/categories");
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
        id="categoryDetails-table"
        className="d-flex justify-content-center align-items-center py-1"
      >
        <div className="card">
          <div className="card-body py-2">
            <table className="table table-responsive">
              <tbody>
                <tr>
                  <th>Producent:</th>
                  <td>{categories ? categories.categoryName : "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container d-flex align-items-center  justify-content-center mb-2">
        <Link
          to="/categories"
          type="button"
          className="btn btn-sm btn-secondary mx-2"
        >
          Wróć do listy
        </Link>
        <Link
          to={`/categories/edit/${categories?.categoryName}`}
          className="btn btn-sm btn-primary"
        >
          Edytuj
        </Link>
        <button
          type="button"
          className="btn btn-sm btn-danger mx-2"
          onClick={() => setShowDialog(true)}
        >
          Usuń kategorię
        </button>
      </div>
      <DeleteConfirm
        message="Czy chcesz usunąć tę kategorię?"
        show={showDialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
