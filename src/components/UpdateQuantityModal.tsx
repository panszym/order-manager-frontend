import React from "react";

interface UpdateQuantityProps {
  show: boolean;
  currentQuantity: number;
  onConfirm: (newQuantity: number) => void;
  onCancel: () => void;
}

export const UpdateQuantityModal: React.FC<UpdateQuantityProps> = ({
  show,
  currentQuantity,
  onConfirm,
  onCancel,
}) => {
  const [quantity, setQuantity] = React.useState<number>(currentQuantity);

  React.useEffect(() => {
    setQuantity(currentQuantity);
  }, [currentQuantity]);

  if (!show) return null;

  return (
    <div
      className="modal show d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Zmień ilość:</h5>
            <button
              className="btn-close"
              type="button"
              onClick={onCancel}
            ></button>
          </div>

          <div className="modal-body">
            <input
              type="number"
              className="form-control"
              value={quantity}
              min={1}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          <div className="modal-footer">
            <button
              className="btn btn-sm btn-secondary"
              type="button"
              onClick={onCancel}
            >
              Anuluj
            </button>
            <button
              className="btn btn-sm btn-primary"
              type="button"
              onClick={() => onConfirm(quantity)}
            >
              Zapisz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
