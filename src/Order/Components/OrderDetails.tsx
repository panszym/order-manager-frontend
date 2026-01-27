import { Link, useNavigate, useParams } from "react-router-dom";
import "./Components.css";
import { useState } from "react";
import { DeleteConfirm } from "../../components/DeleteConfirm";
import { useOrderDetails } from "../../hooks/useOrderDetails";
import { deleteOrder } from "../../services/order-service";
import DateTimeFormat from "../../Utils/DateTime";


export const OrderDetails = () => {
  const navigate = useNavigate();
  const { orderCode } = useParams<{ orderCode: string }>();
  const { order, errors, isLoading, setLoader, setErrors } = useOrderDetails();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleCancel = () => {
    setShowDialog(false);
  };

  const handleConfirm = () => {
    setLoader(true);
    deleteOrder(orderCode!)
      .then((res) => {
        if (res) {
          navigate("/orders");
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
        <h1>Dane zamówienia</h1>
      </div>

      <div
        id="orderDetails-table"
        className="d-flex justify-content-center align-items-center py-1"
      >
        <div className="card">
          <div className="card-body py-2">
            <table className="table table-responsive">
              <tbody>
                <tr>
                  <th>Numer zamówienia:</th>
                  <td>{order ? order.orderCode : "N/A"}</td>
                </tr>
                <tr>
                  <th>osoba odpowiedzialna:</th>
                  <td>{order ? order.client : "N/A"}</td>
                </tr>
                <tr>
                  <th>Data zamówienia:</th>
                  <td>{order? DateTimeFormat.formatDateString(order.dateTime.toString()) : "N/A"}</td>
                </tr>
                <tr>
                  <th>Status:</th>
                  <td>{order? order.status : "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container d-flex align-items-center  justify-content-center mb-2">
        <Link
          to="/orders"
          type="button"
          className="btn btn-sm btn-secondary mx-2"
        >
          Wróć do listy
        </Link>
        <Link
          to={`/orders/edit/${order?.orderCode}`}
          className="btn btn-sm btn-primary"
        >
          Edytuj
        </Link>
        <button
          type="button"
          className="btn btn-sm btn-danger mx-2"
          onClick={() => setShowDialog(true)}
        >
          Usuń zamówienie
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
