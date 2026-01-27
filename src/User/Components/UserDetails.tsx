import { Link, useNavigate, useParams } from "react-router-dom";
import "./Components.css";
import { useState } from "react";
import { DeleteConfirm } from "../../components/DeleteConfirm";
import { deleteUser } from "../../services/user-service";
import { useUserDetails } from "../../hooks/useUserDetails";

export const UserDetails = () => {
  const navigate = useNavigate();
  const { login } = useParams<{ login: string }>();
  const { user, errors, isLoading, setLoader, setErrors } = useUserDetails();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleCancel = () => {
    setShowDialog(false);
  };

  const handleConfirm = () => {
    setLoader(true);
    deleteUser(login!)
      .then((res) => {
        if (res) {
          navigate("/users");
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
        <h1>Dane użytkownika</h1>
      </div>

      <div
        id="userDetails-table"
        className="d-flex justify-content-center align-items-center py-1"
      >
        <div className="card">
          <div className="card-body py-2">
            <table className="table table-responsive">
              <tbody>
                <tr>
                  <th>Imię:</th>
                  <td>{user ? user.firstName : "N/A"}</td>
                </tr>
                <tr>
                  <th>Nazwisko:</th>
                  <td>{user ? user.lastName : "N/A"}</td>
                </tr>
                <tr>
                  <th>Status:</th>
                  <td>{user ? user.status : "N/A"}</td>
                </tr>
                <tr>
                  <th>Rola:</th>
                  <td>{user ? user.role : "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container d-flex align-items-center  justify-content-center mb-2">
        <Link
          to="/users"
          type="button"
          className="btn btn-sm btn-secondary mx-2"
        >
          Wróć do listy
        </Link>
        <Link
          to={`/users/edit/${user?.login}`}
          className="btn btn-sm btn-primary"
        >
          Edytuj
        </Link>
        <button
          type="button"
          className="btn btn-sm btn-danger mx-2"
          onClick={() => setShowDialog(true)}
        >
          Usuń użytkownika
        </button>
      </div>
      <DeleteConfirm
        message="Czy chcesz usunąć tego użytkownika?"
        show={showDialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
