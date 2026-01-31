import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { UpdateConfirm } from "../../Article/Components/UpdateConfirm";
import type { Client } from "../../model/ClientModel";
import { getClientByCode, updateClient } from "../../services/client-service";
import { ClientValidation } from "../../validation/ClientValidation";

export const ClientUpdate = () => {
  const navigate = useNavigate();
  const { code } = useParams<{ code: string }>();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Client>({
    code: "",
    name: "",
    postalCode: "",
    address: "",
    city: "",
  });

  useEffect(() => {
    if (code) {
      setLoader(true);
      getClientByCode(code)
        .then((res) => {
          if (res && res.data) {
            setInitialValues(res.data);
          }
        })
        .catch((error) => setErrors(error.response.data.message))
        .finally(() => setLoader(false));
    }
  }, [code]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values: Client) => {
      if (code !== null)
        updateClient(code!, values)
          .then((response) => {
            if (response && response.status === 200) {
              navigate(`/clients`);
            }
          })
          .catch((error) => {
            setErrors(error.message);
          });
    },
    validationSchema: ClientValidation,
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
            <label htmlFor="name" className="form-label">
              Nazwa klienta
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control border"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="code" className="form-label">
              Kod klienta
            </label>
            <input
              type="text"
              id="code"
              name="code"
              className="form-control border"
              value={formik.values.code}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.code && formik.errors.code ? (
              <div className="text-danger fst-italic">{formik.errors.code}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Adres
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="form-control border"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="postalCode" className="form-label">
              Kod pocztowy
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              className="form-control border"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              Miejscowość
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="form-control border"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
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
