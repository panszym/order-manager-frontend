import useClient from "../../hooks/useClient";
import type { Client } from "../../model/ClientModel";
import { ClientChoose } from "./ClientChoose";


interface Props {
  formik: any; 
}

export const ClientChooseWrapper = ({ formik }: Props) => {
  const { clients, isLoading, error } = useClient();

  if (isLoading) return <p>Ładowanie klientów...</p>;
  if (error) return <p className="text-danger">Błąd: {error}</p>;

 
  const clientsCode: string[] = clients.map((p: Client) => p.code);

  return (
    <div className="d-flex align-items-center mt-1">
      <div className="mx-3">
        <p>Klient:</p>
      </div>
      <div>
        <ClientChoose
          options={clientsCode}
          id="client"
          name="client"
          value={formik.values.client}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.client}
          touched={formik.touched.client}
        />
      </div>
    </div>
  );
};

