import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ProducerConstant } from "../../Utils/ProducerConstant";
import { AddConfirm } from "../../components/AddConfirm";
import type { Accessory } from "../../model/AccessoryModel";
import { addAccessory } from "../../services/accessory-service";
import { ProducerChoose } from "../../Article/Components/ProducerChoose";
import { NewAccessoryValidation } from "../../validation/NewAccessoryValidation";

export const NewAccessory = () => {
  const navigate = useNavigate();

  const [showDialog, setShowDialog] = useState<boolean>(false);

  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Accessory>({
    title: "",
    orderCode: "",
    description: "",
    producer: "",
    nominalCurrent: 0,
    nominalVoltage: "",
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values: Accessory) => {
      console.log(values);
      addAccessory(values)
        .then((response) => {
          if (response && response.status === 200) {
            navigate(`/accessories`);
          }
        })
        .catch((error) => {
          setErrors(error.response.data.message);
        });
    },
    validationSchema: NewAccessoryValidation,
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

          <div className="d-flex justify-content-center align-items-center mt-1">
            <div className="mx-3">
              <p>Producent:</p>
            </div>
            <div>
              <ProducerChoose
                options={ProducerConstant}
                id="producer"
                name="producer"
                value={formik.values.producer}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.producer}
                touched={formik.touched.producer}
              />
            </div>
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
