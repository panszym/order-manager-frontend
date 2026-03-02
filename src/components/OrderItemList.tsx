import { useState } from "react";
import type { OrderItem } from "../model/OrderItem";
import { UpdateQuantityModal } from "./UpdateQuantityModal";
import {
  updateOrderedQuantity,
  updateOrderItemStatus,
  updateQuantity,
} from "../services/orderItem-service";
import { UpdateOrderItemStatusModal } from "./UpdateOrderItemStatusModal";

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
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [selectedStatusItem, setSelectedStatusItem] =
    useState<OrderItem | null>(null);

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

      setItems((prev) =>
        prev.map((item) =>
          item.id === selectedItem.id
            ? { ...item, quantity: newValue }
            : item
        )
      );
    } else {
      await updateOrderedQuantity(selectedItem.id, newValue);

      setItems((prev) =>
        prev.map((item) =>
          item.id === selectedItem.id
            ? { ...item, orderedQuantity: newValue }
            : item
        )
      );
    }

    handleCloseModal();
  } catch (error) {
    console.error("Błąd aktualizacji:", error);
  }
};

  const handleOpenStatusModal = (item: OrderItem) => {
    setSelectedStatusItem(item);
    setShowStatusModal(true);
  };
  const handleCloseStatusModal = () => {
    setShowStatusModal(false);
    setSelectedStatusItem(null);
  };

  const handleConfirmStatus = async (newStatus: string) => {
    if (!selectedStatusItem) return;

    try {
      await updateOrderItemStatus(selectedStatusItem.id, newStatus);
      setItems((prev) =>
        prev.map((item) =>
          item.id === selectedStatusItem.id
            ? { ...item, itemStatus: newStatus }
            : item,
        ),
      );

      handleCloseStatusModal();
    } catch (error) {
      console.error("Błąd aktualizacji statusu:", error);
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
              <th></th>
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
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleOpenStatusModal(item)}
                  >
                    Zmień status
                  </button>
                </td>
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
      <UpdateOrderItemStatusModal
        show={showStatusModal}
        currentStatus={selectedStatusItem?.itemStatus ?? ""}
        onConfirm={handleConfirmStatus}
        onCancel={handleCloseStatusModal}
      />
    </>
  );
};
