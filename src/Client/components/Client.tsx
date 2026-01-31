import { Link } from "react-router-dom";

import useClient from "../../hooks/useClient";
import { ClientList } from "../../components/ClientList";

const Client = () => {
  const { clients, error, isLoading } = useClient();
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-2">
          <div className="d-flex">
            <Link to="/clients/new" type="button" className="btn btn-success">
              Nowy klient
            </Link>
          </div>
        </div>
      </div>
      {isLoading && <p> Ładowanie</p>}
      {error && <p> {error}</p>}
      <ClientList clients={clients} />
    </div>
  );
};

export default Client;
