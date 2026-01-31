import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AddConfirm } from "../../components/AddConfirm";
import type { Category } from "../../model/CategoryModel";
import { addCategory } from "../../services/category-service";
import { CategoryValidation } from "../../validation/CategoryValidation";

export const NewCategory = () => {
  const navigate = useNavigate();

  const [showDialog, setShowDialog] = useState<boolean>(false);

  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Category>({
    categoryName: "",
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values: Category) => {
      addCategory(values)
        .then((response) => {
          if (response && response.status === 200) {
            navigate(`/categories`);
          }
        })
        .catch((error) => {
          setErrors(error.response?.data?.message || "Błąd sieci");
        });
    },
    validationSchema: CategoryValidation,
  });

  const handleCancel = () => {
    setShowDialog(false);
  };

  const handleConfirm = () => {
    formik.handleSubmit();
    setShowDialog(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-2">
      <div className="container col-md-4 col-sm-8 col-xs-12 ">
        <div className="container mt-1 d-flex justify-content-center align-items-center">
          {isLoading && <p>Ładowanie...</p>}
          {error && <p className="text-danger">{error}</p>}
        </div>
        <form onSubmit={() => setShowDialog(true)}>
          <div className="mb-3">
            <label htmlFor="categoryName" className="form-label">
              Kategoria
            </label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              className="form-control border"
              value={formik.values.categoryName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.categoryName && formik.errors.categoryName ? (
              <div className="text-danger fst-italic">
                {formik.errors.categoryName}
              </div>
            ) : null}
          </div>
          <div className="container d-flex align-items-center  justify-content-center">
            <button
              className="btn btn-sm btn-primary mb-2"
              type="button"
              onClick={() => setShowDialog(true)}
            >
              Zapisz
            </button>
          </div>
        </form>
      </div>
      <AddConfirm
        message="Czy chcesz zapisać zmiany?"
        show={showDialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
