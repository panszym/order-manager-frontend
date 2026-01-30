import * as yup from "yup";

export const CategoryValidation = yup.object().shape({
    categoryName: yup.string().required("Nazwa jest wymagana"),
})