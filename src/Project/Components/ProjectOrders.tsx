import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { DeleteConfirm } from "../../components/DeleteConfirm";
import useProjectOrders from "../../hooks/useProjectOrders";
import { ProjectOrdersList } from "../../components/ProjectOrdersList";
import type { Order } from "../../model/OrderModel";
import { deleteProjectOrder } from "../../services/project-service";

const ProjectOrders = () => {
  const { projectCode } = useParams<{ projectCode: string }>();
  const { order, error, isLoading } = useProjectOrders();

  const [orders, setOrders] = useState<Order[]>([]);
  const [orderToDelete, setOrderToDelete] = useState<string | null>(null);

  useEffect(() => {
  if (order) {
    setOrders(order);
  }
}, [order]);

  const handleRemoveClick = (orderOrderCode: string) => {
    setOrderToDelete(orderOrderCode);
  };

  const handleCancel = () => {
    setOrderToDelete(null);
  };

  const handleConfirm = () => {
    if (!projectCode || !orderToDelete) return;

    deleteProjectOrder(projectCode, orderToDelete)
      .then(() => {
        setOrders(prev =>
          prev.filter(a => a.orderCode !== orderToDelete)
        );
      })
      .catch(err => console.error(err))
      .finally(() => setOrderToDelete(null));
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-2">
          <div className="d-flex gap-2">
            <Link
              to={`/projects/projectCode/${projectCode}`}
              type="button"
              className="btn btn-sm btn-primary"
            >
              Wróć do projektu
            </Link>
            <Link
              to={`/orders/new/${projectCode}`}
              type="button"
              className="btn btn-sm btn-success"
            >
              Nowe zamówienie
            </Link>
          </div>
        </div>
      </div>

      {isLoading && <p>Ładowanie...</p>}
      {error && <p className="text-danger">{error}</p>}

      <ProjectOrdersList
        orders={orders}
        onRemove={handleRemoveClick} 
      />
      <DeleteConfirm
        message="Czy chcesz usunąć dane zamówienie z tego projektu?"
        show={!!orderToDelete}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default ProjectOrders;
