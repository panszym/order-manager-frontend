import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AddConfirm } from "../../components/AddConfirm";
import type { Order } from "../../model/OrderModel";
import { addOrder } from "../../services/order-service";
import { NewOrderValidation } from "../../validation/NewOrderValidation";
import { StatusChoose } from "./StatusChoose";
import { OrderStatusConstant } from "../../Utils/OrderStatusConstant";
import DateTimeFormat from "../../Utils/DateTime";

export const NewOrder = () => {
  const navigate = useNavigate();

  const [showDialog, setShowDialog] = useState<boolean>(false);

  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Order>({
    orderCode: "",
    client: "",
    dateTime: DateTimeFormat.nowForInput(),
    status: "",
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values: Order) => {
      console.log(values);
      addOrder(values)
        .then((response) => {
          if (response && response.status === 200) {
            navigate(`/orders`);
          }
        })
        .catch((error) => {
          setErrors(error.response.data.message);
        });
    },
    validationSchema: NewOrderValidation,
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
            <label htmlFor="orderCode" className="form-label">
              Numer zamówienia
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
            <label htmlFor="client" className="form-label">
              Zamawiający
            </label>
            <input
              type="text"
              id="client"
              name="client"
              className="form-control border"
              value={formik.values.client}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center mt-1">
            <div className="mx-3">
              <p>Status</p>
            </div>
            <div>
              <StatusChoose
                options={OrderStatusConstant}
                id="status"
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.status}
                touched={formik.touched.status}
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
