import { Link } from "react-router-dom";
import { ProjectList } from "../../components/ProjectsList";
import useProjects from "../../hooks/useProject";

const Project = () => {
  const { projects, error, isLoading } = useProjects();
  return (
    <div className="container">
      <div className="row mt-5">
            <div className="col-2">
              <div className="d-flex">
                <Link
                  to="/projects/new"
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
      <ProjectList projects={projects} />
    </div>
  );
};

export default Project;
