import { Link } from "react-router-dom";
import { OrderList } from "../../components/OrderList";
import useOrders from "../../hooks/useOrder";

const Order = () => {
  const { orders, error, isLoading } = useOrders();
    return (
    <div className="container">
      <div className="row mt-5">
            <div className="col-2">
              <div className="d-flex">
                <Link
                  to="/orders/new"
                  type="button"
                  className="btn btn-success"
                >
                  Nowe zamówienie
                </Link>
              </div>
            </div>
            </div>
      {isLoading && <p> Ładowanie</p>}
      {error && <p> {error}</p>}
      <OrderList orders={orders} />
    </div>
  );
};

export default Order;