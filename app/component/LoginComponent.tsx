'use client'
import React from 'react'
import { Formik, FormikHelpers } from "formik";
import { basicSchema } from '@/app/component/schema';
import Link from 'next/link';

interface IformValue {
  email: string;
  password: string;
}

const LoginComponent: React.FC = () => {
  const initialValues: IformValue = {
    email: "",
    password: ""
  };

  const onSubmit = (values: IformValue, actions: FormikHelpers<IformValue>) => {
    console.log(values);
    setTimeout(()=>{actions.setSubmitting(false)}, 1000)
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={basicSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleBlur, handleChange, values, errors, touched, isSubmitting }) => (
        <form onSubmit={handleSubmit} autoComplete="off" className="w-full max-w-md mx-auto">
          <label htmlFor="email" className="block text-left mt-4">E-mail</label>
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
          <label htmlFor="password" className="block text-left mt-4">Senha</label>
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

          <Link href={""} className='flex items-end justify-end py-4 mt-2 text-[#186CC3]'>Recuperar senha</Link>
          <button disabled={isSubmitting} type="submit" className={`w-full py-2 mt-4 bg-[#186CC3] h-12 text-white font-bold rounded ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}>
            Entrar
          </button>
        </form>
      )}
    </Formik>
  );
}

export default LoginComponent;
