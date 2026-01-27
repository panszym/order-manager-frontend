import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import type { Order } from "../../model/OrderModel";
import { getOrderByOrderCode, updateOrder } from "../../services/order-service";
import { OrderUpdateValidation } from "../../validation/OrderUpdateValidation";
import { OrderStatusConstant } from "../../Utils/OrderStatusConstant";
import { UpdateConfirm } from "../../Article/Components/UpdateConfirm";
import { OrderStatusChoose } from "./OrderStatusChoose";

export const OrderUpdate = () => {
  const navigate = useNavigate();
  const { orderCode } = useParams<{ orderCode: string }>();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Order>({
    orderCode: "",
    client: "",
    dateTime: new Date("01.01.2020T00.00"),
    status: "",
  });

  useEffect(() => {
    if (orderCode) {
      setLoader(true);
      getOrderByOrderCode(orderCode)
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
    onSubmit: (values: Order) => {
      if (orderCode !== null)
        updateOrder(orderCode!, values)
          .then((response) => {
            if (response && response.status === 200) {
              navigate(`/orders`);
            }
          })
          .catch((error) => {
            setErrors(error.message);
          });
    },
    validationSchema: OrderUpdateValidation,
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
              Osoba odpowiedzialna
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

          <div className="mb-3">
            <label htmlFor="dateTime" className="form-label">
              Data zamówienia
            </label>
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              className="form-control border"
              value={formik.values.dateTime.toString()}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="d-flex justify-content-center align-items-center mt-1">
            <div className="mx-3">
              <p>Producent:</p>
            </div>
            <div>
              <OrderStatusChoose
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
      <UpdateConfirm
        message="Czy chcesz zapisać zmiany?"
        show={showDialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
