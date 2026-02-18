import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AddConfirm } from "../../components/AddConfirm";
import type { Project } from "../../model/ProjectModel";
import { NewProjectValidation } from "../../validation/NewProjectValidation";
import { addProject } from "../../services/project-service";
import { ClientChooseWrapper } from "./ClientChooseWrapper";
import { OwnerChooseWrapper } from "./OwnerChooseWraper";

export const NewProject = () => {
  const navigate = useNavigate();

  const [showDialog, setShowDialog] = useState<boolean>(false);

  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Project>({
    projectCode: "",
    purchaser: "",
    client: "",
    description:"",
    owner: ""
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values: Project) => {
      console.log(values);
      addProject(values)
        .then((response) => {
          if (response && response.status === 200) {
            navigate(`/projects`);
          }
        })
        .catch((error) => {
          setErrors(error.response.data.message);
        });
    },
    validationSchema: NewProjectValidation,
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
            {formik.touched.purchaser && formik.errors.purchaser ? (
              <div className="text-danger fst-italic">
                {formik.errors.purchaser}
              </div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Opis
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="form-control border"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.purchaser && formik.errors.purchaser ? (
              <div className="text-danger fst-italic">
                {formik.errors.purchaser}
              </div>
            ) : null}
          </div>

          <div className="mb-3">
            <OwnerChooseWrapper formik={formik} />
          </div>

          <div className="mb-3">
            <ClientChooseWrapper formik={formik} />
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
      <AddConfirm
        message="Czy chcesz zapisać zmiany?"
        show={showDialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
