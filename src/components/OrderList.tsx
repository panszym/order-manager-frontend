import type { Order } from "../model/OrderModel";


export const OrderList: React.FC<{ orders: Order[] }> = (props) => {
  return (
    <>
      {props.orders.map((order) => (
        <div
          key={order.id}
          className="card mt-3 shadow p-3 mb-3 bg-body rounded"
        >
          <div className="row g-0">
            <div className="col-md-2 d-flex justify-content-center align-items-center">
              <div className="container d-flex justify-content-center align-items-center">
                <p>
                  Klient: {order.client}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h4 className="card-title">Numer zamówienia: {order.orderCode}</h4>
                <div className="d-flex justify-content-between py-1">
                  Status: {order.status}
                </div>
        
  
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <div className="d-flex align-items-center ms-auto">
                <span className="me-2">Kategoria:</span>
                <span className="badge rounded-pill app-primary-bg-color">
                  {order.dateTime.toString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};