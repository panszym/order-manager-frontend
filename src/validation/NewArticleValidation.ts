import * as yup from "yup";

export const NewArticleValidation = yup.object().shape({
    orderCode: yup.string().required("Numer katalogowy jest wymagany"),
    producer: yup.string().required("Producent jest wymagany"),
    category: yup.string().required("Kategoria jest wymagana"),
})