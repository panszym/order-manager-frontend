import apiProjects from "../config/ApiProjects";
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