import { useOrderItems } from "../../hooks/useOrderItems";
import { OrderItemList } from "../../components/OrderItemList";
import { useNavigate } from "react-router-dom";

const OrderItemsAll = () => {
  const { orderItems, errors, isLoading } = useOrderItems();
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row mt-5">
            <div className="col-2">
              <div className="d-flex">
                <button
    className="btn btn-sm btn-secondary mb-3"
    onClick={() => navigate(-1)} // <- wraca do poprzedniej strony
  >
    Wróć
  </button>
              </div>
            </div>
            </div>
      {isLoading && <p>Ładowanie...</p>}
      {errors && <p className="text-danger">{errors}</p>}
      {orderItems && <OrderItemList orderItems={orderItems} />}
    </div>
  );
};

export default OrderItemsAll;