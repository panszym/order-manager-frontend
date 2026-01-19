import { AccessoryList } from "../../components/AccessoryList";
import useAccessory from "../../hooks/useAccessory";


const Dashboard = () => {
  const { accessory, error, isLoading } = useAccessory();
  return (
    <div>
      {isLoading && <p> Ładowanie</p>}
      {error && <p> {error}</p>}
      <AccessoryList accessories={accessory} />;
    </div>
  );
};

export default Dashboard;
