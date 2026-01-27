import * as yup from "yup";

export const OrderUpdateValidation = yup.object().shape({
    orderCode: yup.string().required("Numer zamówienia jest wymagany"),
})