import * as yup from "yup";

export const NewProjectValidation = yup.object().shape({
    projectCode: yup.string().required("Numer projektu jest wymagany"),
})