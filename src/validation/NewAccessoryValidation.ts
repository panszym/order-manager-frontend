import * as yup from "yup";

export const NewAccessoryValidation = yup.object().shape({
    orderCode: yup.string().required("Numer katalogowy jest wymagany"),
    producer: yup.string().required("Producent jest wymagany"),
})