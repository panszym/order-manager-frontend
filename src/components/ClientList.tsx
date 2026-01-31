import { Link } from "react-router-dom";
import type { Client } from "../model/ClientModel";

export const ClientList: React.FC<{ clients: Client[] }> = (props) => {
  return (
    <>
      {props.clients.map((client) => (
        <Link
          key={client.code}
          to={`/clients/code/${client.code}`}
          style={{ textDecoration: "none" }}
        >
          <div
            key={client.id}
            className="card mt-3 shadow p-3 mb-3 bg-body rounded"
          >
            <div className="row g-0">
              <div className="col-md-2 d-flex justify-content-center align-items-center">
                <div className="container d-flex justify-content-center align-items-center">
                  <p>
                    Adres: <br /> {client.address}
                    <br />
                    Kod pocztowy: <br /> {client.postalCode}
                    <br />
                    Miejscowość: <br /> {client.city}
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h4 className="card-title">{client.name}</h4>
                  <h6>{client.code}</h6>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
