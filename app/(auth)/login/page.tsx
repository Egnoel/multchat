import React from 'react'
import logo from "../../assets/logo.png";
import Image from 'next/image';
import LoginComponent from '@/app/component/LoginComponent';
import Link from 'next/link';
import './style.css'


const page = () => {
  return (
    <div className='flex flex-col w-[85%] h-[100%] gap-4 py-6'>
         <div className='flex flex-row justify-between'>
            <Image src={logo} alt='logo' width={120} height={120} className='object-fit w-auto h-auto' />
            <Link href={"/signup"} className='text-[#186CC3]'>Criar conta</Link>
         </div>
         <span className='w-[80%] text-[#757575]'>Comece seu <span className='text-black'>teste GRATUITO</span> de 3 dias do Equipechat em apenas 3 etapas! <span className='text-black'>Não se preocupe, não pedimos dados do seu cartão.</span></span>
         <LoginComponent />
    </div>
  )
}

export default page