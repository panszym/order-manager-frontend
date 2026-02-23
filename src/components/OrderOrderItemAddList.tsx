import { Link } from "react-router-dom";
import type { Article } from "../model/ArticleModel";
import { useState } from "react";

type Props = {
  articles: Article[];
  onAdd: (articleOrderCode: string, quantity: number) => void;
  isAdding: boolean;
};

export const OrderOrderItemAddList: React.FC<Props> = ({
  articles,
  onAdd,
  isAdding,
}) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const handleQuantityChange = (orderCode: string, value: string) => {
    const num = parseInt(value);
    setQuantities((prev) => ({
      ...prev,
      [orderCode]: isNaN(num) ? 1 : num,
    }));
  };
  return (
    <>
      {articles.map((articles) => (
        <div
          key={articles.orderCode}
          className="card mt-3 shadow p-3 mb-3 bg-body rounded"
        >
          <div className="row g-0 align-items-center">
            <Link
              to={`/articles/orderCode/${articles.orderCode}`}
              style={{ textDecoration: "none", color: "inherit" }}
              className="col-md-10"
            >
              <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <p>
                    Numer artykułu:
                    <br /> {articles.orderCode}
                    <br />
                    Producent:
                    <br /> {articles.producer}
                  </p>
                </div>

                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">{articles.title}</h4>
                    <h6>{articles.description}</h6>
                    <div>Prąd nominalny: {articles.nominalCurrent}A</div>
                    <div>Napięcie nominalne: {articles.nominalVoltage}</div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="col-md-2 d-flex justify-content-center align-items-center gap-2">
              Ilość:
              <input
                type="number"
                min={1}
                value={quantities[articles.orderCode] || 1}
                onChange={(e) =>
                  handleQuantityChange(articles.orderCode, e.target.value)
                }
                className="form-control form-control-sm"
                style={{ width: "60px" }}
                disabled={isAdding}
              />
              <button
                className="btn btn-success"
                disabled={isAdding}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const quantity = quantities[articles.orderCode] || 1;
                  onAdd(articles.orderCode, quantity);
                }}
              >
                Dodaj do zamówienia
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
