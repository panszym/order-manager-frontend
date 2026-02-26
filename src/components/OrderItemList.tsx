import { useState } from "react";
import type { OrderItem } from "../model/OrderItem";
import axios from "axios";
import { UpdateQuantityModal } from "./UpdateQuantityModal";
import {
  updateOrderedQuantity,
  updateQuantity,
} from "../services/orderItem-service";

interface Props {
  orderItems: OrderItem[];
}

export const OrderItemList: React.FC<Props> = ({ orderItems }) => {
  const [items, setItems] = useState<OrderItem[]>(orderItems);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<OrderItem | null>(null);
  const [fieldToEdit, setFieldToEdit] = useState<
    "quantity" | "orderedQuantity" | null
  >(null);

  const handleOpenModal = (
    item: OrderItem,
    field: "quantity" | "orderedQuantity",
  ) => {
    setSelectedItem(item);
    setFieldToEdit(field);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleConfirm = async (newValue: number) => {
    if (!selectedItem || !fieldToEdit) return;

    try {
      if (fieldToEdit === "quantity") {
        await updateQuantity(selectedItem.id, newValue);
      } else {
        await updateOrderedQuantity(selectedItem.id, newValue);
      }

      window.location.reload();
    } catch (error) {
      console.error("Błąd aktualizacji:", error);
    }
  };
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-bordered mt-3 text-center">
          <thead className="table-dark">
            <tr>
              <th>Lp</th>
              <th>Numer zamówieniowy</th>
              <th>Producent</th>
              <th>Ilość</th>
              <th></th>
              <th>Ilość zamówiona</th>
              <th></th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.orderCode}</td>
                <td>{item.producer}</td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleOpenModal(item, "quantity")}
                  >
                    Zmień ilość
                  </button>
                </td>
                <td>{item.orderedQuantity}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleOpenModal(item, "orderedQuantity")}
                  >
                    Zmień ilość
                  </button>
                </td>
                <td>{item.itemStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UpdateQuantityModal
        show={showModal}
        currentQuantity={selectedItem?.orderedQuantity ?? 0}
        onConfirm={handleConfirm}
        onCancel={handleCloseModal}
      />
    </>
  );
};
