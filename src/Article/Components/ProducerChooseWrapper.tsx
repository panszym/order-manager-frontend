import useProducers from "../../hooks/useProducer";
import type { Producer } from "../../model/ProducerModel";
import { ProducerChoose } from "./ProducerChoose";


interface Props {
  formik: any; // lub dokładnie typ Formik
}

export const ProducerChooseWrapper = ({ formik }: Props) => {
  const { producers, isLoading, error } = useProducers();

  if (isLoading) return <p>Ładowanie producentów...</p>;
  if (error) return <p className="text-danger">Błąd: {error}</p>;

 
  const producerNames: string[] = producers.map((p: Producer) => p.name);

  return (
    <div className="d-flex align-items-center mt-1">
      <div className="mx-3">
        <p>Producent:</p>
      </div>
      <div>
        <ProducerChoose
          options={producerNames}
          id="producer"
          name="producer"
          value={formik.values.producer}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.producer}
          touched={formik.touched.producer}
        />
      </div>
    </div>
  );
};

