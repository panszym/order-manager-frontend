import { OrderList } from "../../components/OrderList";
import { ProjectList } from "../../components/ProjectsList";
import useOrders from "../../hooks/useOrder";
import useProjects from "../../hooks/useProject";


const Dashboard = () => {
  const { orders, error, isLoading } = useOrders();
  return (
    <div>
      {isLoading && <p> Ładowanie</p>}
      {error && <p> {error}</p>}
      <OrderList orders={orders} />;
    </div>
  );
};

export default Dashboard;
