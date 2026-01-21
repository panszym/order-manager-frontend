import { OrderList } from "../../components/OrderList";
import useOrders from "../../hooks/useOrder";

const Order = () => {
  const { orders, error, isLoading } = useOrders();
  return (
    <div className="container">
      {isLoading && <p> Ładowanie</p>}
      {error && <p> {error}</p>}
      <OrderList orders={orders} />
    </div>
  );
};

export default Order;