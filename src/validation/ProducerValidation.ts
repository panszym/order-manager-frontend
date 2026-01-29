import * as yup from "yup";

export const ProducerValidation = yup.object().shape({
    name: yup.string().required("Nazwa jest wymagana"),
})