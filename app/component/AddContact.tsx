import React from 'react'
import { Switch } from "@/components/ui/switch"
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'


const AddContact = () => {
  return (
    <div className='bg-white w-full flex flex-col gap-3 px-2 py-1'>
        <span>Dados do Contacto</span>
        <div className='flex flex-row gap-3'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" placeholder='Nome' className='border py-2 px-2' />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="phone">Número do whatsapp</label>
                <input type="number" name="phone" id="phone" placeholder='921 000 000' className='border py-2 px-2' />
            </div>
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='nome@dominio.com' className='border py-2 px-2' />
        </div>
        <div className='flex flex-row gap-1'>
            <Switch className='bg-[#F3F3F3]' />
            <span>Desabilitar chatbot</span>
        </div>
        <span>Informações adicionais</span>
        <div className='flex flex-row gap-3'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='nome@dominio.com' className='border py-2 px-2' />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='nome@dominio.com' className='border py-2 px-2' />
            </div>
        </div>
        <div className='border border-dashed border-[#186CC3] w-52 py-2 flex flex-row items-center justify-center text-[#186CC3]'>
            <Plus className='text-[#186CC3]' />
            Adicionar informação
        </div>
        <Button className='bg-[#186CC3] text-white'>Adicionar</Button>
    </div>
  )
}

export default AddContact