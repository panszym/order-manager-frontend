import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useFormik } from "formik";

import type { Article } from "../../model/ArticleModel";
import {
  getArticleByOrderCode,
  updateArticle,
} from "../../services/article-service";
import { ArticleUpdateValidation } from "../../validation/ArticleUpdateValidation";
import { UpdateConfirm } from "./UpdateConfirm";
import { ProducerChooseWrapper } from "./ProducerChooseWrapper";
import { CategoryChooseWrapper } from "./CategoryChooseWrapper";

export const ArticleUpdate = () => {
  const navigate = useNavigate();
  const { orderCode } = useParams<{ orderCode: string }>();
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
    width: 0,
    height: 0,
    depth: 0,
    category: "",
  });

  useEffect(() => {
    if (orderCode) {
      setLoader(true);
      getArticleByOrderCode(orderCode)
        .then((res) => {
          if (res && res.data) {
            setInitialValues(res.data);
          }
        })
        .catch((error) => setErrors(error.response.data.message))
        .finally(() => setLoader(false));
    }
  }, [orderCode]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values: Article) => {
      if (orderCode !== null)
        updateArticle(orderCode!, values)
          .then((response) => {
            if (response && response.status === 200) {
              navigate(`/articles`);
            }
          })
          .catch((error) => {
            setErrors(error.message);
          });
    },
    validationSchema: ArticleUpdateValidation,
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
              Tytuł
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
            <label htmlFor="nominalCurrent" className="form-label">
              Prąd nominalny
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
              Napięcie nominalne
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
              Wysokość
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
              Szerokość
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
              Głębokość
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

          <div className="mb-3">
            <ProducerChooseWrapper formik={formik} />
          </div>
          <div className="mb-3">
            <CategoryChooseWrapper formik={formik} />
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
