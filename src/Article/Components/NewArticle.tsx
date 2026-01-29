import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import type { Article } from "../../model/ArticleModel";
import { addArticle } from "../../services/article-service";
import { NewArticleValidation } from "../../validation/NewArticleValidation";
import { ArticleCategoryChoose } from "./ArticleCategoryChoose";
import { ArticleCategoryConstant } from "../../Utils/ArticleCategoryConstant";
import { AddConfirm } from "../../components/AddConfirm";
import { ProducerChooseWrapper } from "./ProducerChooseWrapper";

export const NewArticle = () => {
  const navigate = useNavigate();

  const [showDialog, setShowDialog] = useState<boolean>(false);

  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Article>({
    title: "",
    orderCode: "",
    description: "",
    producer: "",
    nominalCurrent: 0,
    nominalVoltage: "",
    width: 0.0,
    height: 0.0,
    depth: 0.0,
    category: "",
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values: Article) => {
      console.log(values);
      addArticle(values)
        .then((response) => {
          if (response && response.status === 200) {
            navigate(`/articles`);
          }
        })
        .catch((error) => {
          setErrors(error.response.data.message);
        });
    },
    validationSchema: NewArticleValidation,
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
            <label htmlFor="title" className="form-label">
              Produkt
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control border"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="orderCode" className="form-label">
              Numer katalogowy
            </label>
            <input
              type="text"
              id="orderCode"
              name="orderCode"
              className="form-control border"
              value={formik.values.orderCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.orderCode && formik.errors.orderCode ? (
              <div className="text-danger fst-italic">
                {formik.errors.orderCode}
              </div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Opis
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="form-control border"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="mb-3">
            <ProducerChooseWrapper formik={formik} />
          </div>

          <div className="mb-3">
            <label htmlFor="nominalCurrent" className="form-label">
              {`Prąd nominalny [A]:`}
            </label>
            <input
              type="number"
              id="nominalCurrent"
              name="nominalCurrent"
              className="form-control border"
              value={formik.values.nominalCurrent}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="nominalVoltage" className="form-label">
              {`Nominalne napięcie [V]:`}
            </label>
            <input
              type="text"
              id="nominalVoltage"
              name="nominalVoltage"
              className="form-control border"
              value={formik.values.nominalVoltage}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="height" className="form-label">
              {`Wysokość [mm]:`}
            </label>
            <input
              type="number"
              id="height"
              name="height"
              className="form-control border"
              value={formik.values.height}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="width" className="form-label">
              {`Szerokość [mm]:`}
            </label>
            <input
              type="number"
              id="width"
              name="width"
              className="form-control border"
              value={formik.values.width}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="depth" className="form-label">
              {`Głębokość [mm]:`}
            </label>
            <input
              type="number"
              id="depth"
              name="depth"
              className="form-control border"
              value={formik.values.depth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center mt-1">
            <div className="mx-3">
              <p>Kategoria:</p>
            </div>
            <div>
              <ArticleCategoryChoose
                options={ArticleCategoryConstant}
                id="category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.category}
                touched={formik.touched.category}
              />
            </div>
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
