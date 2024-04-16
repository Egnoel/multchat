"use client"
import React from 'react'
import { signupSchema } from './schema'
import Link from 'next/link';
import { Formik, FormikHelpers } from "formik";

interface IformValue {
  email: string;
  password: string;
  nome:string;
  telefone:string;
  plano:string;
}

const SignUpComponent: React.FC = () => {
    const initialValues: IformValue = {
        email: "",
        password: "",
        nome: "",
        telefone: "",
        plano: ""
      };
      const onSubmit = (values: IformValue, actions: FormikHelpers<IformValue>) => {
        console.log(values);
        setTimeout(()=>{actions.setSubmitting(false);  actions.resetForm();}, 1000)
      };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleBlur, handleChange, values, errors, touched, isSubmitting }) => (
        <form onSubmit={handleSubmit} autoComplete="off" className="w-full max-w-md mx-auto flex flex-col gap-4">
          <div>
            <label htmlFor="nome" className="block text-left">Qual é o seu nome</label>
            <input
                value={values.nome}
                onChange={handleChange}
                id="nome"
                type="text"
                placeholder="Seu Nome"
                onBlur={handleBlur}
                autoComplete="off"
                className={`w-full px-3 py-2  border-2  rounded ${errors.nome && touched.nome ? "border-red-500" : ""}`}
            />
            {errors.nome && touched.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
          </div>
          <div>
            <label htmlFor="telefone" className="block text-left">Seu número de Whatsapp</label>
            <input
                value={values.telefone}
                onChange={handleChange}
                id="telefone"
                type="text"
                placeholder="Telefone com (DDD)"
                onBlur={handleBlur}
                autoComplete="off"
                className={`w-full px-3 py-2  border-2  rounded ${errors.telefone && touched.telefone ? "border-red-500" : ""}`}
            />
            {errors.telefone && touched.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone}</p>}
          </div>
          <div className='flex flex-col'>
            <span className=' mb-2'>Seus dados de acesso</span>
            <div className='flex flex-row gap-2'>
                <div className='flex flex-col'>
                    <label htmlFor="email" className="block text-left ">E-mail</label>
                    <input
                        value={values.email}
                        onChange={handleChange}
                        id="email"
                        type="email"
                        placeholder="nome@dominio.com"
                        onBlur={handleBlur}
                        autoComplete="off"
                        className={`w-full px-3 py-2  border-2  rounded ${errors.email && touched.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && touched.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password" className="block text-left">Senha</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="********"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="new-password"
                        className={`w-full px-3 py-2  border-2  rounded ${errors.password && touched.password ? "border-red-500" : ""}`}
                    />
                    {errors.password && touched.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>
            </div>
          </div>
         <div>
            <label htmlFor="plano" className="block text-left">Plano</label>
            <select
                value={values.plano}
                onChange={handleChange}
                id="plano"
                onBlur={handleBlur}
                autoComplete="off"
                className={`w-full px-3 py-2  border-2  rounded ${errors.plano && touched.plano ? "border-red-500" : ""}`}
            >
                <option value="">Selecione</option>
                <option value="basico">Básico</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
            </select>
            {errors.plano && touched.plano && <p className="text-red-500 text-xs mt-1">{errors.plano}</p>}
          </div>
          <button disabled={isSubmitting} type="submit" className={`w-full py-2 bg-[#186CC3] h-12 text-white font-bold rounded ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}>
            Cadastrar
          </button>
        </form>
      )}
    </Formik>
  )
}

export default SignUpComponent