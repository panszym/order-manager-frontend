import { OrderItemConstant } from "../Utils/OrderItemConstant";
import { OrderItemStatusChoose } from "./OrderItemStatusChoose";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const UpdateOrderItemStatusWrapper = ({ value, onChange }: Props) => {
  return (
    <div className="d-flex align-items-center mt-1">
      <div className="mx-3">
        <p>Status:</p>
      </div>
      <div>
        <OrderItemStatusChoose
          options={OrderItemConstant}
          id="status"
          name="status"
          value={value}
          onChange={onChange}
          onBlur={() => {}}
        />
      </div>
    </div>
  );
};
