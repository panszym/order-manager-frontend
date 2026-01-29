import { Link } from "react-router-dom";
import type { Producer } from "../model/ProducerModel";

export const ProducerList: React.FC<{ producers: Producer[] }> = (props) => {
  return (
    <>
      {props.producers.map((producers) => (
        <Link
          key={producers.name}
          to={`/producers/name/${producers.name}`}
          style={{ textDecoration: "none" }}
        >
          <div
            key={producers.id}
            className="card mt-3 shadow p-3 mb-1 bg-body rounded"
          >
            <div className="row g-0">
              <div className="col-md-3">
                <div className="container text-start">
                  <p>{producers.name}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
