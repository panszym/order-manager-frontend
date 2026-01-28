import { Link } from "react-router-dom";
import { AccessoryList } from "../../components/AccessoryList";

import useAccessory from "../../hooks/useAccessory";

const Accessory = () => {
  const { accessory, error, isLoading } = useAccessory();
  return (
    <div className="container">
      <div className="row mt-5">
            <div className="col-2">
              <div className="d-flex">
                <Link
                  to="/accessories/new"
                  type="button"
                  className="btn btn-success"
                >
                  Nowy artykuł
                </Link>
              </div>
            </div>
            </div>
      {isLoading && <p> Ładowanie</p>}
      {error && <p> {error}</p>}
      <AccessoryList accessories={accessory} />
    </div>
  );
};

export default Accessory;
