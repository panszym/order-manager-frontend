import { Link, useNavigate, useParams } from "react-router-dom";
import "./Components.css";

import { useState } from "react";
import { DeleteConfirm } from "../../components/DeleteConfirm";
import { useAccessoryDetails } from "../../hooks/useAccessoryDetails";
import { deleteAccessory } from "../../services/accessory-service";

export const AccessoryDetails = () => {
  const navigate = useNavigate();
  const { orderCode } = useParams<{ orderCode: string }>();
  const { accessory, errors, isLoading, setLoader, setErrors } =
    useAccessoryDetails();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleCancel = () => {
    setShowDialog(false);
  };

  const handleConfirm = () => {
    setLoader(true);
    deleteAccessory(orderCode!)
      .then((res) => {
        if (res) {
          navigate("/accessories");
        }
      })
      .catch((error) => setErrors(error.response.data.messageor))
      .finally(() => {
        setLoader(false);
        setShowDialog(false);
      });
  };

  return (
    <div>
      <div className="container mt-1 d-flex justify-content-center align-items-center">
        {isLoading && <p>Ładowanie...</p>}
        {errors && <p className="text-danger">{errors}</p>}
      </div>
      <div className="container d-flex justify-content-center align-items-center py-2 mt-1">
        <h1>Dane akcesoria</h1>
      </div>

      <div
        id="accessoryDetails-table"
        className="d-flex justify-content-center align-items-center py-1"
      >
        <div className="card">
          <div className="card-body py-2">
            <table className="table table-responsive">
              <tbody>
                <tr>
                  <th>Numer katalogowy:</th>
                  <td>{accessory ? accessory.orderCode : "N/A"}</td>
                </tr>
                <tr>
                  <th>Opis:</th>
                  <td>{accessory ? accessory.title : "N/A"}</td>
                </tr>
                <tr>
                  <th>Producent:</th>
                  <td>{accessory?.producer ? accessory.producer : "N/A"}</td>
                </tr>
                <tr>
                  <th>Opis:</th>
                  <td>
                    {accessory?.description ? accessory.description : "N/A"}
                  </td>
                </tr>
                <tr>
                  <th>Prąd nominalny:</th>
                  <td>
                    {accessory?.nominalCurrent
                      ? accessory.nominalCurrent
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <th>Nominalne napięcie:</th>
                  <td>
                    {accessory?.nominalVoltage
                      ? accessory.nominalVoltage
                      : "N/A"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container d-flex align-items-center  justify-content-center mb-2">
        <Link
          to="/accessories"
          type="button"
          className="btn btn-sm btn-secondary mx-2"
        >
          Wróć do listy
        </Link>
        <Link
          to={`/accessories/edit/${accessory?.orderCode}`}
          className="btn btn-sm btn-primary"
        >
          Edytuj
        </Link>
        <button
          type="button"
          className="btn btn-sm btn-danger mx-2"
          onClick={() => setShowDialog(true)}
        >
          Usuń artykuł
        </button>
      </div>
      <DeleteConfirm
        message="Czy chcesz usunąć ten artykuł?"
        show={showDialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
