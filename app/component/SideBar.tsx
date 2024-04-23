import React from 'react'
import logo from "../assets/logo.png";
import Image from 'next/image';
import { FaWhatsapp } from "react-icons/fa";
import { RiKanbanView } from "react-icons/ri";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LuClipboardCheck, LuContact2 } from "react-icons/lu";
import { MdOutlineCalendarMonth } from "react-icons/md";
import Link from 'next/link';


const SideBar = () => {
  return (
    <div className='flex flex-col w-full h-full pl-4 py-6 gap-5 min-h-full'>
        <div className='flex flex-col items-center gap-2'>
            <Image src={logo} alt='logo' width={120} height={120} className='w-auto h-auto' />
        </div>
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
                <span>Gerência</span>
                <div className='flex flex-row gap-3 items-center'>
                    <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#186CC3]'>
                        <RiKanbanView className='w-5 h-5 rotate-180 rounded-md text-[#A4A4A4] hover:text-white'/>
                    </div>
                    <Link href={"/"} className="text-[#696969]">Dashboard</Link>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <span>Atendimento</span>
                <div className='flex flex-row gap-3 items-center'>
                    <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#186CC3]'>
                        <FaWhatsapp className='w-5 h-5 text-[#A4A4A4] hover:text-white' />
                    </div>
                    <Link href={"atendimentos"} className="text-[#696969]">Atendimentos</Link>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#186CC3]'>
                        <AiOutlineThunderbolt className='w-5 h-5 text-[#A4A4A4] hover:text-white' />
                    </div>
                    <Link href={"respostas"} className="text-[#696969]">Respostas Rápidas</Link>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#186CC3]'>
                        <LuClipboardCheck className='w-5 h-5 text-[#A4A4A4] hover:text-white' />
                    </div>
                    <Link href={"tarefas"} className="text-[#696969]">Tarefas</Link>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#186CC3]'>
                        <LuContact2 className='w-5 h-5 text-[#A4A4A4] hover:text-white' />
                    </div>
                    <Link href={"contactos"} className="text-[#696969]">Contactos</Link>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#186CC3]'>
                        <MdOutlineCalendarMonth className='w-5 h-5 text-[#A4A4A4] hover:text-white' />
                    </div>
                    <Link href={"agendamentos"} className="text-[#696969]">Agendamentos</Link>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <span>Administração</span>
            </div>
        </div>
    </div>
  )
}

export default SideBar