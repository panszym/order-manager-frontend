import * as yup from "yup";

export const ClientValidation = yup.object().shape({
    code: yup.string().required("Kod jest wymagany"),
})