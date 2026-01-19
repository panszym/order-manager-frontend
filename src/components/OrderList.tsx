import type { Order } from "../model/OrderModel";

interface Props {
  orders: Order[];
}

export const OrderList = ({ orders }: Props) => {
  return (
    <div>
      <table border={3}>
        <thead>
          <tr>
            <th>OrderCode</th>
            <th>Client</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.orderCode}</td>
              <td>{order.client}</td>
              <td>{new Date(order.dateTime).getDate()}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
