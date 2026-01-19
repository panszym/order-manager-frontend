import type { Accessory } from "../model/AccessoryModel";

interface Props {
  accessories: Accessory[];
}

export const AccessoryList = ({ accessories }: Props) => {
  return (
    <div>
      <table border={3}>
        <thead>
          <tr>
            <th>Title</th>
            <th>orderCode</th>
            <th>Description</th>
            <th>Producer</th>
            <th>Nominal Current</th>
            <th>Nominal Voltage</th>
          </tr>
        </thead>
        <tbody>
          {accessories.map((accessory) => (
            <tr key={accessory.id}>
              <td>{accessory.title}</td>
              <td>{accessory.orderCode}</td>
              <td>{accessory.description}</td>
              <td>{accessory.producer}</td>
              <td>{accessory.nominalCurrent}</td>
              <td>{accessory.nominalVoltage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
