import { useEffect, useState } from "react";
import type { Project } from "../model/ProjectModel";
import { getProjects } from "../services/project-service";

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setErrors] = useState(null);
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    getProjects()
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setLoader(false));
  }, []);
  return { projects, error, isLoading };
};

export default useProjects;
