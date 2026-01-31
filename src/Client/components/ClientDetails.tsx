import { Link, useNavigate, useParams } from "react-router-dom";
import "./Components.css";

import { useState } from "react";
import { DeleteConfirm } from "../../components/DeleteConfirm";
import { useClientDetails } from "../../hooks/useClientDetails";
import { deleteClient } from "../../services/client-service";

export const ClientDetails = () => {
  const navigate = useNavigate();
  const { code } = useParams<{ code: string }>();
  const { clients, errors, isLoading, setLoader, setErrors } =
    useClientDetails();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleCancel = () => {
    setShowDialog(false);
  };

  const handleConfirm = () => {
    setLoader(true);
    deleteClient(code!)
      .then((res) => {
        if (res) {
          navigate("/clients");
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
        id="clientDetails-table"
        className="d-flex justify-content-center align-items-center py-1"
      >
        <div className="card">
          <div className="card-body py-2">
            <table className="table table-responsive">
              <tbody>
                <tr>
                  <th>Nazwa klienta:</th>
                  <td>{clients?.name ? clients.name : "N/A"}</td>
                </tr>
                <tr>
                  <th>Kod:</th>
                  <td>{clients ? clients.code : "N/A"}</td>
                </tr>
                <tr>
                  <th>Adres:</th>
                  <td>{clients?.address ? clients.address : "N/A"}</td>
                </tr>
                <tr>
                  <th>Kod pocztowy:</th>
                  <td>{clients?.postalCode ? clients.postalCode : "N/A"}</td>
                </tr>
                <tr>
                  <th>Miejscowość:</th>
                  <td>{clients?.city ? clients.city : "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container d-flex align-items-center  justify-content-center mb-2">
        <Link
          to="/clients"
          type="button"
          className="btn btn-sm btn-secondary mx-2"
        >
          Wróć do listy
        </Link>
        <Link
          to={`/clients/edit/${clients?.code}`}
          className="btn btn-sm btn-primary"
        >
          Edytuj
        </Link>
        <button
          type="button"
          className="btn btn-sm btn-danger mx-2"
          onClick={() => setShowDialog(true)}
        >
          Usuń klienta
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
