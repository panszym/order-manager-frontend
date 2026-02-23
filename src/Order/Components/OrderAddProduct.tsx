import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { AddConfirm } from "../../components/AddConfirm";
import useArticles from "../../hooks/useArticles";
import { addProductToOrder } from "../../services/orderItem-service";
import { OrderOrderItemAddList } from "../../components/OrderOrderItemAddList";

const OrderAddProduct = () => {
  const { orderCode } = useParams<{ orderCode: string }>();
  const navigate = useNavigate();

  const { articles, error, isLoading } = useArticles();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
const [articleToAdd, setArticleToAdd] = useState<{ orderCode: string; quantity: number } | null>(null);  const [isSubmitting, setIsSubmitting] = useState(false);

const handleAddClick = (orderCode: string, quantity: number) => {
    setArticleToAdd({orderCode, quantity});
  };

  const handleCancel = () => {
    setArticleToAdd(null);
  };

  const handleConfirm = async () => {
    if (!orderCode || !articleToAdd) return;

    try {
      setIsSubmitting(true);
      await addProductToOrder(orderCode, articleToAdd.orderCode, articleToAdd.quantity);

      navigate(`/orders/orderCode/${orderCode}`);
    } catch (err: any) {
      const message = err.response?.data?.message;
      setErrorMessage(message || "Wystąpił błąd");
    } finally {
      setIsSubmitting(false);
      setArticleToAdd(null);
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-2">
          <Link
            to={`/orders/orderCode/${orderCode}`}
            className="btn btn-sm btn-primary"
          >
            Wróć do zamówienia
          </Link>
        </div>
      </div>

      {isLoading && <p>Ładowanie...</p>}
      {error && <p className="text-danger">{error}</p>}
      {errorMessage && <p className="text-danger">{errorMessage}</p>}

      <OrderOrderItemAddList
        articles={articles}
        onAdd={handleAddClick}
        isAdding={isSubmitting}
      />

      <AddConfirm
        message="Czy chcesz dodać ten artykuł do zamówienia?"
        show={!!articleToAdd}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default OrderAddProduct;
