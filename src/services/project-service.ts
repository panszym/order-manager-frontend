import apiProjects from "../config/ApiProjects";
import type { Project } from "../model/ProjectModel";

export const getProjects = () => {
  return apiProjects.get<Project[]>('');
};