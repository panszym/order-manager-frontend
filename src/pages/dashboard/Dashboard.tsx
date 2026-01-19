import { ProjectList } from "../../components/ProjectsList";
import useProjects from "../../hooks/useProject";


const Dashboard = () => {
  const { projects, error, isLoading } = useProjects();
  return (
    <div>
      {isLoading && <p> Ładowanie</p>}
      {error && <p> {error}</p>}
      <ProjectList projects={projects} />;
    </div>
  );
};

export default Dashboard;
