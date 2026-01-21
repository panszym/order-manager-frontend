import type { Accessory } from "../model/AccessoryModel";


export const AccessoryList: React.FC<{ accessories: Accessory[] }> = (
  props,
) => {
  return (
    <>
      {props.accessories.map((accessory) => (
        <div
          key={accessory.id}
          className="card mt-3 shadow p-3 mb-3 bg-body rounded"
        >
          <div className="row g-0">
            <div className="col-md-2 d-flex justify-content-center align-items-center">
              <div className="container d-flex justify-content-center align-items-center">
                <p>
                  Numer artykułu: <br /> {accessory.orderCode}
                  <br />
                  Producent: <br /> {accessory.producer}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h4 className="card-title">{accessory.title}</h4>
                <h6>{accessory.description}</h6>
                <div className="d-flex justify-content-between py-1">
                  Prąd nominalny: {accessory.nominalCurrent}A
                </div>
                <div className="d-flex justify-content-between py-1">
                  Napięcie nominalne: {accessory.nominalVoltage}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
