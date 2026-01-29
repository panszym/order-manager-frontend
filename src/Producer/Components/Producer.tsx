import { Link } from "react-router-dom";
import useProducers from "../../hooks/useProducer";
import { ProducerList } from "../../components/ProducerList";

const Producer = () => {
  const { producers, error, isLoading } = useProducers();
  return (
    <div className="container">
      <div className="row mt-5">
            <div className="col-2">
              <div className="d-flex">
                <Link
                  to="/producers/new"
                  type="button"
                  className="btn btn-success"
                >
                  Nowy producent
                </Link>
              </div>
            </div>
            </div>
      {isLoading && <p> Ładowanie</p>}
      {error && <p> {error}</p>}
      <ProducerList producers={producers} />
    </div>
  );
};

export default Producer;
