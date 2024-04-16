import * as yup from "yup";

const phoneNumberRegex = /^2449\d{7}$/;
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup.string().email("Insira um e-mail válido").required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
});

export const signupSchema = yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Insira um e-mail válido").required("Campo obrigatório"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Insira uma palavra passe forte" })
    .required("Campo obrigatório"),
    telefone: yup.string().matches(phoneNumberRegex,{message:"insira um número válido..."}).required("Campo obrigatório"),
    plano: yup.string().required("Campo obrigatório")
})