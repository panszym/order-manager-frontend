import { Link } from "react-router-dom";
import type { Order } from "../model/OrderModel";

type Props = {
  orders: Order[];
  onRemove: (orderOrderCode: string) => void;
};

export const ProjectOrdersList: React.FC<Props> = ({ orders, onRemove }) => {
  return (
    <>
      {orders.map((order) => (
        <div
          key={order.orderCode}
          className="card mt-3 shadow p-3 mb-3 bg-body rounded"
        >
          <div className="row g-0 align-items-center">
            <Link
              to={`/orders/orderCode/${order.orderCode}`}
              style={{ textDecoration: "none", color: "inherit" }}
              className="col-md-10"
            >
              <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <p>
                    Numer zamówienia:
                    <br /> {order.orderCode}
                    <br />
                    Zamawiający:
                    <br /> {order.client}
                  </p>
                </div>

                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">{order.status}</h4>
                    <h6>{order.dateTime.toString()}</h6>
                  </div>
                </div>
              </div>
            </Link>
            <div className="col-md-2 d-flex justify-content-center">
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onRemove(order.orderCode);
                }}
              >
                Usuń zamówienie
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
