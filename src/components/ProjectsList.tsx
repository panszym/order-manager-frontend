import { Link } from "react-router-dom";
import type { Project } from "../model/ProjectModel";

export const ProjectList: React.FC<{ projects: Project[] }> = (props) => {
  return (
    <>
      {props.projects.map((project) => (
        <Link
        key={project.projectCode}
                to={`/projects/projectCode/${project.projectCode}`}
                style={{ textDecoration: "none" }}>
        <div
          key={project.id}
          className="card mt-3 shadow p-3 mb-3 bg-body rounded"
        >
          <div className="row g-0">
            <div className="col-md-2 d-flex justify-content-center align-items-center">
              <div className="container d-flex justify-content-center align-items-center">
                <p>
                  Numer projektu: <br /> {project.projectCode}
                  <br />
                  Klient: <br /> {project.client}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h4 className="card-title">{project.projectCode}</h4>
                <h6>Zamawiający: {project.purchaser}</h6>
                <h6>Osoba odpowiedzialna: {project.owner}</h6>
                <h6>Opis: {project.description}</h6>
              </div>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </>
  );
};
