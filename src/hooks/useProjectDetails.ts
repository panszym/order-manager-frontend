import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Project } from "../model/ProjectModel";
import { getProjectByProjectCode } from "../services/project-service";

export const useProjectDetails = () => {
  const { projectCode } = useParams<{ projectCode: string }>();
  const [project, setProjects] = useState<Project | undefined>();
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getProjectByProjectCode(projectCode!)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .finally(() => setLoader(false));
  }, []);
  return { project, errors, isLoading, setLoader, setErrors };
};
