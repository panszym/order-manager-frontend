import { Link, useParams } from "react-router-dom";
import { addArticleAccessory } from "../../services/article-service";
import { useState, useEffect } from "react";
import { ArticleAccessoriesAddList } from "../../components/ArticleAccessoriesAddList";
import useAccessory from "../../hooks/useAccessory";
import { AddConfirm } from "../../components/AddConfirm";

const ArticleAccessoriesAdd = () => {
  const { orderCode } = useParams<{ orderCode: string }>();
  const { accessory, error, isLoading } = useAccessory();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [accessories, setAccessories] = useState(accessory);
  const [accessoryToAdd, setAccessoryToAdd] = useState<string | null>(null);

  useEffect(() => {
    setAccessories(accessory);
  }, [accessory]);

  const handleAddClick = (accessoryOrderCode: string) => {
    setAccessoryToAdd(accessoryOrderCode);
  };

  const handleCancel = () => {
    setAccessoryToAdd(null);
  };

  const handleConfirm = () => {
    if (!orderCode || !accessoryToAdd) return;

    addArticleAccessory(orderCode, accessoryToAdd)
      .then(() => {
        setAccessories((prev) =>
          prev.filter((a) => a.orderCode !== accessoryToAdd),
        );
      })
      .catch((err) => {
        const message = err.response?.data?.message;
        setErrorMessage(message);
      })
      .finally(() => setAccessoryToAdd(null));
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-2">
          <div className="d-flex">
            <Link
              to={`/articles/orderCode/${orderCode}`}
              type="button"
              className="btn btn-sm btn-primary"
            >
              Wróć do artykułu
            </Link>
          </div>
        </div>
      </div>

      {isLoading && <p>Ładowanie...</p>}
      {errorMessage && <p className="text-danger">{errorMessage}</p>}

      <ArticleAccessoriesAddList
        accessories={accessories}
        onAdd={handleAddClick}
        isAdding={!!accessoryToAdd}
      />
      <AddConfirm
        message="Czy chcesz dodać dany produkt do listy akcesoriów?"
        show={!!accessoryToAdd}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default ArticleAccessoriesAdd;
