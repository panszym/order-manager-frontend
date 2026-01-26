import * as yup from "yup";

export const AccessoryUpdateValidation = yup.object().shape({
    orderCode: yup.string().required("Numer katalogowy jest wymagany"),
})