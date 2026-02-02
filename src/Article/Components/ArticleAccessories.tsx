import { Link, useParams } from "react-router-dom";
import useArticleAccessories from "../../hooks/useArticleAccessories";
import { ArticleAccessoriesList } from "../../components/ArticleAccessoriesList";
import { deleteArticleAccessory } from "../../services/article-service";
import { useState, useEffect } from "react";
import { DeleteConfirm } from "../../components/DeleteConfirm";

const ArticleAccessories = () => {
  const { orderCode } = useParams<{ orderCode: string }>();
  const { accessory, error, isLoading } = useArticleAccessories();

  const [accessories, setAccessories] = useState(accessory);
  const [accessoryToDelete, setAccessoryToDelete] = useState<string | null>(null);

  useEffect(() => {
    setAccessories(accessory);
  }, [accessory]);

  const handleRemoveClick = (accessoryOrderCode: string) => {
    setAccessoryToDelete(accessoryOrderCode);
  };

  const handleCancel = () => {
    setAccessoryToDelete(null);
  };

  const handleConfirm = () => {
    if (!orderCode || !accessoryToDelete) return;

    deleteArticleAccessory(orderCode, accessoryToDelete)
      .then(() => {
        setAccessories(prev =>
          prev.filter(a => a.orderCode !== accessoryToDelete)
        );
      })
      .catch(err => console.error(err))
      .finally(() => setAccessoryToDelete(null));
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
      {error && <p className="text-danger">{error}</p>}

      <ArticleAccessoriesList
        accessories={accessories}
        onRemove={handleRemoveClick} 
      />
      <DeleteConfirm
        message="Czy chcesz usunąć dany produkt z listy akcesoriów?"
        show={!!accessoryToDelete}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default ArticleAccessories;
