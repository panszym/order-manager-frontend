import React from "react";
import { UpdateOrderItemStatusWrapper } from "./UpdateOrderItemStatusWrapper";

interface UpdateStatusProps {
  show: boolean;
  currentStatus: string;
  onConfirm: (newStatus: string) => void;
  onCancel: () => void;
}

export const UpdateOrderItemStatusModal: React.FC<UpdateStatusProps> = ({
  show,
  currentStatus,
  onConfirm,
  onCancel,
}) => {
  const [status, setStatus] = React.useState<string>(currentStatus);

  React.useEffect(() => {
    setStatus(currentStatus);
  }, [currentStatus]);

  if (!show) return null;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  return (
    <div
      className="modal show d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Zmień status:</h5>
            <button
              className="btn-close"
              type="button"
              onClick={onCancel}
            ></button>
          </div>

          <div className="modal-body">
            <UpdateOrderItemStatusWrapper
              value={status}
              onChange={handleChange}
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
              onClick={() => onConfirm(status)}
            >
              Zapisz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
