import { Link, useNavigate, useParams } from "react-router-dom";
import "./Components.css";
import { useState } from "react";
import { DeleteConfirm } from "../../components/DeleteConfirm";
import { deleteProject } from "../../services/project-service";
import { useProjectDetails } from "../../hooks/useProjectDetails";

export const ProjectDetails = () => {
  const navigate = useNavigate();
  const { projectCode } = useParams<{ projectCode: string }>();
  const { project, errors, isLoading, setLoader, setErrors } =
    useProjectDetails();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleCancel = () => {
    setShowDialog(false);
  };

  const handleConfirm = () => {
    setLoader(true);
    deleteProject(projectCode!)
      .then((res) => {
        if (res) {
          navigate("/projects");
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
        <h1>Dane artykuły</h1>
      </div>

      <div
        id="projectDetails-table"
        className="d-flex justify-content-center align-items-center py-1"
      >
        <div className="card">
          <div className="card-body py-2">
            <table className="table table-responsive">
              <tbody>
                <tr>
                  <th>Numer projektu:</th>
                  <td>{project ? project.projectCode : "N/A"}</td>
                </tr>
                <tr>
                  <th>Zamawiający:</th>
                  <td>{project ? project.purchaser : "N/A"}</td>
                </tr>
                <tr>
                  <th>Klient:</th>
                  <td>{project ? project.client : "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container d-flex align-items-center  justify-content-center mb-2">
        <Link
          to="/projects"
          type="button"
          className="btn btn-sm btn-secondary mx-2"
        >
          Wróć do listy
        </Link>
        <Link
          to={`/projects/edit/${project?.projectCode}`}
          className="btn btn-sm btn-primary"
        >
          Edytuj
        </Link>
        <button
          type="button"
          className="btn btn-sm btn-danger mx-2"
          onClick={() => setShowDialog(true)}
        >
          Usuń projekt
        </button>
      </div>
      <DeleteConfirm
        message="Czy chcesz usunąć ten projekt?"
        show={showDialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
