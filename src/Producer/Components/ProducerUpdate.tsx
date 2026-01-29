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
import type { Producer } from "../../model/ProducerModel";
import {
  getProducerByName,
  updateProducer,
} from "../../services/producer-service";
import { ProducerValidation } from "../../validation/ProducerValidation";

export const ProducerUpdate = () => {
  const navigate = useNavigate();
  const { name } = useParams<{ name: string }>();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Producer>({
    name: "",
  });

  useEffect(() => {
    if (name) {
      setLoader(true);
      getProducerByName(name)
        .then((res) => {
          if (res && res.data) {
            setInitialValues(res.data);
          }
        })
        .catch((error) => setErrors(error.response.data.message))
        .finally(() => setLoader(false));
    }
  }, [name]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values: Producer) => {
      if (name !== null)
        updateProducer(name!, values)
          .then((response) => {
            if (response && response.status === 200) {
              navigate(`/producers`);
            }
          })
          .catch((error) => {
            setErrors(error.message);
          });
    },
    validationSchema: ProducerValidation,
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
            <label htmlFor="name" className="form-label">
              Producent
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control border"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger fst-italic">{formik.errors.name}</div>
            ) : null}
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
