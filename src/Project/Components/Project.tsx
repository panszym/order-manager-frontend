import { ProjectList } from "../../components/ProjectsList";
import useProjects from "../../hooks/useProject";

const Project = () => {
  const { projects, error, isLoading } = useProjects();
  return (
    <div className="container">
      {isLoading && <p> Ładowanie</p>}
      {error && <p> {error}</p>}
      <ProjectList projects={projects} />
    </div>
  );
};

export default Project;
