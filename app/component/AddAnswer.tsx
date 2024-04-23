import { Button } from '@/components/ui/button'
import React from 'react'
import { GiPaperClip } from "react-icons/gi";

const AddAnswer = () => {
  return (
    <div className='w-[90%] h-[90%] flex flex-col'>
        <h1>Adicionar</h1>
        <div className='flex flex-col gap-3 mt-3'>
            <div className='flex flex-col'>
                <label htmlFor="atalho">Atalho</label>
                <input type="text"
                id='atalho'
                className='border border-[#E6E6E6] outline-none rounded px-3'
                placeholder='Digitar' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="resposta">Resposta</label>
                <textarea name="resposta"
                id="resposta"
                cols={20}
                rows={5}
                className='border border-[#E6E6E6] outline-none rounded px-3'
                placeholder='Digitar'/>
            </div>
            <div>
                <span>Variaveis disponíveis</span>
                <div className='flex flex-row gap-3 flex-wrap w-full border border-[#E6E6E6] rounded items-center py-4 px-4 text-sm'>
                    <span className='bg-[#05274A] px-3 py-1 rounded-[25px] text-white'>Primeiro Nome</span>
                    <span className='bg-[#05274A] px-3 py-1 rounded-[25px] text-white'>Nome</span>
                    <span className='bg-[#05274A] px-3 py-1 rounded-[25px] text-white'>Saudação</span>
                    <span className='bg-[#05274A] px-3 py-1 rounded-[25px] text-white'>Protocolo</span>
                    <span className='bg-[#05274A] px-3 py-1 rounded-[25px] text-white'>Data</span>
                    <span className='bg-[#05274A] px-3 py-1 rounded-[25px] text-white'>Hora</span>
                </div>
            </div>
        </div>
        <footer className='flex flex-row mt-32 w-full justify-between'>
            <div className='flex flex-row gap-2 items-center'>
                <div className='flex flex-row items-center border border-[#186CC3] w-20 py-1 justify-center gap-1 bg-[#DBEDFF] rounded'>
                    <GiPaperClip width={4} height={4}/>
                    <span className='text-sm'>Entrar</span>
                </div>
                <span className='text-xs text-center text-[#6E6E6E]'>Nenhum anexo</span>
            </div>
            <Button className='bg-[#186CC3] rounded py-1 w-20 text-center text-white hover:text-black hover:bg-[#186CC3]'>Adicionar</Button>
        </footer>
    </div>
  )
}

export default AddAnswer