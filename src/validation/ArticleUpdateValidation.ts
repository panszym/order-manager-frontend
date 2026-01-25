import * as yup from "yup";

export const ArticleUpdateValidation = yup.object().shape({
    orderCode: yup.string().required("Numer katalogowy jest wymagany"),
})