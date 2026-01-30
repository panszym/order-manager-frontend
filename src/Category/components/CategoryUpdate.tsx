import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { UpdateConfirm } from "../../Article/Components/UpdateConfirm";
import type { Category } from "../../model/CategoryModel";
import { getCategoryByCategoryName, updateCategory } from "../../services/category-service";
import { CategoryValidation } from "../../validation/CategoryValidation";

export const CategoryUpdate = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams<{ categoryName: string }>();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Category>({
    categoryName: "",
  });

  useEffect(() => {
    if (categoryName) {
      setLoader(true);
      getCategoryByCategoryName(categoryName)
        .then((res) => {
          if (res && res.data) {
            setInitialValues(res.data);
          }
        })
        .catch((error) => setErrors(error.response.data.message))
        .finally(() => setLoader(false));
    }
  }, [categoryName]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values: Category) => {
      if (categoryName !== null)
        updateCategory(categoryName!, values)
          .then((response) => {
            if (response && response.status === 200) {
              navigate(`/categories`);
            }
          })
          .catch((error) => {
            setErrors(error.message);
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
              <div className="text-danger fst-italic">{formik.errors.categoryName}</div>
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
      <UpdateConfirm
        message="Czy chcesz zapisać zmiany?"
        show={showDialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
