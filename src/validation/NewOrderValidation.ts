import * as yup from "yup";

export const NewOrderValidation = yup.object().shape({
    orderCode: yup.string().required("Numer katalogowy jest wymagany"),
})