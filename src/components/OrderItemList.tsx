import type { OrderItem } from "../model/OrderItem";

export const OrderItemList: React.FC<{ orderItems: OrderItem[] }> = ({ orderItems }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered mt-3 text-center">
        <thead className="table-dark">
          <tr>
            <th>Lp</th>
            <th>Numer zamówieniowy</th>
            <th>Producent</th>
            <th>Ilość</th>
            <th>Ilość zamówiona</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.orderCode}</td>
              <td>{item.producer}</td>
              <td>{item.quantity}</td>
              <td>{item.orderedQuantity}</td>
              <td>{item.itemStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};