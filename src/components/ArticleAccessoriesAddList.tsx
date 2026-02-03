import { Link } from "react-router-dom";
import type { Accessory } from "../model/AccessoryModel";

type Props = {
  accessories: Accessory[];
  onAdd: (accessoryOrderCode: string) => void;
  isAdding: boolean;
};

export const ArticleAccessoriesAddList: React.FC<Props> = ({
  accessories,
  onAdd,
  isAdding
}) => {
  return (
    <>
      {accessories.map((accessory) => (
        <div
          key={accessory.orderCode}
          className="card mt-3 shadow p-3 mb-3 bg-body rounded"
        >
          <div className="row g-0 align-items-center">
            <Link
              to={`/accessories/orderCode/${accessory.orderCode}`}
              style={{ textDecoration: "none", color: "inherit" }}
              className="col-md-10"
            >
              <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <p>
                    Numer artykułu:
                    <br /> {accessory.orderCode}
                    <br />
                    Producent:
                    <br /> {accessory.producer}
                  </p>
                </div>

                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">{accessory.title}</h4>
                    <h6>{accessory.description}</h6>
                    <div>Prąd nominalny: {accessory.nominalCurrent}A</div>
                    <div>Napięcie nominalne: {accessory.nominalVoltage}</div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="col-md-2 d-flex justify-content-center">
              <button
                className="btn btn-success"
                disabled={isAdding}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onAdd(accessory.orderCode);
                }}
              >
                Dodaj do listy artykułów
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
