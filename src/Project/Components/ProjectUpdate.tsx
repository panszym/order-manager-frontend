import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useFormik } from "formik";

import type { Project } from "../../model/ProjectModel";
import {
  getProjectByProjectCode,
  updateProject,
} from "../../services/project-service";
import { ProjectUpdateValidation } from "../../validation/ProjectUpdateValidation";
import { UpdateConfirm } from "../../Article/Components/UpdateConfirm";

export const ProjectUpdate = () => {
  const navigate = useNavigate();
  const { projectCode } = useParams<{ projectCode: string }>();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Project>({
    projectCode: "",
    purchaser: "",
    client: "",
  });

  useEffect(() => {
    if (projectCode) {
      setLoader(true);
      getProjectByProjectCode(projectCode)
        .then((res) => {
          if (res && res.data) {
            setInitialValues(res.data);
          }
        })
        .catch((error) => setErrors(error.response.data.message))
        .finally(() => setLoader(false));
    }
  }, [projectCode]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values: Project) => {
      if (projectCode !== null)
        updateProject(projectCode!, values)
          .then((response) => {
            if (response && response.status === 200) {
              navigate(`/projects`);
            }
          })
          .catch((error) => {
            setErrors(error.message);
          });
    },
    validationSchema: ProjectUpdateValidation,
  });

  const handleCancel = () => {
    setShowDialog(false);
  };

  const handleConfirm = () => {
    formik.handleSubmit();
    setShowDialog(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-2">
      <div className="container col-md-4 col-sm-8 col-xs-12 ">
        <div className="container mt-1 d-flex justify-content-center align-items-center">
          {isLoading && <p>Ładowanie...</p>}
          {error && <p className="text-danger">{error}</p>}
        </div>
        <form onSubmit={() => setShowDialog(true)}>
          <div className="mb-3">
            <label htmlFor="projectCode" className="form-label">
              Numer projektu
            </label>
            <input
              type="text"
              id="projectCode"
              name="projectCode"
              className="form-control border"
              value={formik.values.projectCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.projectCode && formik.errors.projectCode ? (
              <div className="text-danger fst-italic">
                {formik.errors.projectCode}
              </div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="purchaser" className="form-label">
              Zamawiający
            </label>
            <input
              type="text"
              id="purchaser"
              name="purchaser"
              className="form-control border"
              value={formik.values.purchaser}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="client" className="form-label">
              Opis
            </label>
            <input
              type="text"
              id="client"
              name="client"
              className="form-control border"
              value={formik.values.client}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="container d-flex align-items-center  justify-content-center">
            <button
              className="btn btn-sm btn-primary mb-2"
              type="button"
              onClick={() => setShowDialog(true)}
            >
              Zapisz
            </button>
          </div>
        </form>
      </div>
      <UpdateConfirm
        message="Czy chcesz zapisać zmiany?"
        show={showDialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
