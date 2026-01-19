import type { Project } from "../model/ProjectModel";

interface Props {
  projects: Project[];
}

export const ProjectList = ({ projects }: Props) => {
  return (
    <div>
      <table border={3}>
        <thead>
          <tr>
            <th>projectCode</th>
            <th>purchaser</th>
            <th>client</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.projectCode}</td>
              <td>{project.purchaser}</td>
              <td>{project.client}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
