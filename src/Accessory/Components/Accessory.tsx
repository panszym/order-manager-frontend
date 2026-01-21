import { AccessoryList } from "../../components/AccessoryList";

import useAccessory from "../../hooks/useAccessory";

const Accessory = () => {
  const { accessory, error, isLoading } = useAccessory();
  return (
    <div className="container">
      {isLoading && <p> Ładowanie</p>}
      {error && <p> {error}</p>}
      <AccessoryList accessories={accessory} />
    </div>
  );
};

export default Accessory;
