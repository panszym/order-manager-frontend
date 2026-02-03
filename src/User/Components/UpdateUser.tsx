import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { UpdateConfirm } from "../../Article/Components/UpdateConfirm";
import type { User } from "../../model/UserModel";
import { getUserByAdminByLogin, updateUser } from "../../services/user-service";
import { UserUpdateValidation } from "../../validation/UserUpdateValidation";
import { UserChoose } from "./UserChoose";
import { UserRoleConstant } from "../../Utils/UserRoleConstant";
import { UserStatusConstant } from "../../Utils/UserStatusConstant";

export const UserUpdate = () => {
  const navigate = useNavigate();
  const { login } = useParams<{ login: string }>();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<User>({
    firstName: "",
    lastName: "",
    login: "",
    status: "",
    role: "",
  });

  useEffect(() => {
    if (login) {
      setLoader(true);
      getUserByAdminByLogin(login)
        .then((res) => {
          if (res && res.data) {
            setInitialValues(res.data);
          }
        })
        .catch((error) => setErrors(error.response.data.message))
        .finally(() => setLoader(false));
    }
  }, [login]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values: User) => {
      if (login !== null)
        updateUser(login!, values)
          .then((response) => {
            if (response && response.status === 200) {
              navigate(`/users`);
            }
          })
          .catch((error) => setErrors(error.response.data.message))
          .finally(() => setLoader(false));
    },
    validationSchema: UserUpdateValidation,
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
            <label htmlFor="firstName" className="form-label">
              Imię
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-control border"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-danger fst-italic">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Nazwisko
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-control border"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-danger fst-italic">
                {formik.errors.lastName}
              </div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="login" className="form-label">
              Login
            </label>
            <input
              type="text"
              id="login"
              name="login"
              className="form-control border"
              value={formik.values.login}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center mt-1">
            <div className="mx-3">
              <p>Rola</p>
            </div>
            <div>
              <UserChoose
                options={UserRoleConstant}
                id="role"
                name="role"
                value={formik.values.role}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.role}
                touched={formik.touched.role}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-1">
            <div className="mx-3">
              <p>Status</p>
            </div>
            <div>
              <UserChoose
                options={UserStatusConstant}
                id="status"
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.status}
                touched={formik.touched.status}
              />
            </div>
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
