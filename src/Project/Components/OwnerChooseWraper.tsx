import useUser from "../../hooks/useUser";
import type { User } from "../../model/UserModel";
import { OwnerChoose } from "./OwnerChoose";

interface Props {
  formik: any;
}

export const OwnerChooseWrapper = ({ formik }: Props) => {
  const { users, isLoading, error } = useUser();

  if (isLoading) return <p>Ładowanie użytkowników...</p>;
  if (error) return <p className="text-danger">Błąd: {error}</p>;

  const usersCode: string[] = users.map(
    (p: User) => `${p.firstName} ${p.lastName}`,
  );

  return (
    <div className="d-flex align-items-center mt-1">
      <div className="mx-3">
        <p>Osoba odpowiedzialna:</p>
      </div>
      <div>
        <OwnerChoose
          options={usersCode}
          id="user"
          name="user"
          value={formik.values.user}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.user}
          touched={formik.touched.user}
        />
      </div>
    </div>
  );
};
