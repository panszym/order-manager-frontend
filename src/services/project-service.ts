import apiProjects from "../config/ApiProjects";
import type { Order } from "../model/OrderModel";
import type { Project } from "../model/ProjectModel";

export const getProjects = () => {
  return apiProjects.get<Project[]>('');
};

export const getProjectByProjectCode = (projectCode: string) => {
    return apiProjects.get<Project>(`projectCode/${projectCode}`);
}

export const getProjectById = (projectId: string) => {
    return apiProjects.get<Project>(`/${projectId}`);
}

export const deleteProject = (projectCode: string) => {
  return apiProjects.delete(`projectCode/${projectCode}`);
};

export const updateProject = (projectCode: string, project: Project) => {
  return apiProjects.patch<Project>(`/${projectCode}`, project);
};

export const addProject = ( project: Project) => {
  return apiProjects.post<Project>(``, project);
};

export const getProjectOrders = (projectCode: string) => {
  return apiProjects.get<Order[]>(`ordersByProjectProjectCode/${projectCode}`);
};

export const addProjectOrder = (
  projectProjectCode: string,
  orderOrderCode: string,
) => {
  return apiProjects.post(
    `addOrder/${projectProjectCode}/order/${orderOrderCode}`,
  );
};
export const deleteProjectOrder = (
  projectProjectCode: string,
  orderOrderCode: string,
) => {
  return apiProjects.delete(
    `deleteOrder/${projectProjectCode}/order/${orderOrderCode}`,
  );
};