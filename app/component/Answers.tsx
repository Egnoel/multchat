import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { SlNote } from "react-icons/sl";
  import { FaRegTrashCan } from "react-icons/fa6";

const Answers = () => {
  return (
    <div className='flex flex-col w-full h-full gap-6'>
        <h1 className='font-bold mt-5 ml-5'>Lista das Respostas</h1>
        <Table className=''>
            <TableHeader>
                <TableRow className=' bg-[#F4F4F4]'>
                    <TableHead>Atalho</TableHead>
                    <TableHead>Nome do Arquivo</TableHead>
                    <TableHead>Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow >
                    <TableCell>Mensagem</TableCell>
                    <TableCell className='pl-9'>Sem Anexo</TableCell>
                    <TableCell className='flex flex-row gap-3'>
                        <button type='button' title='edit' className='w-5 h-5 bg-[#D7EBFF] flex items-center justify-center'>
                            <SlNote className='text-[#186CC3] w-4 h-4' />
                        </button>
                        <button type='button' title='delete' className='w-5 h-5 bg-[#FFDCDC] flex items-center justify-center'>
                            <FaRegTrashCan className='text-[#DD4040] w-4 h-4' />
                        </button>
                    </TableCell>
                </TableRow>
                <TableRow className=' bg-[#F4F4F4]'>
                    <TableCell>Mensagem</TableCell>
                    <TableCell className='pl-9'>Sem Anexo</TableCell>
                    <TableCell className='flex flex-row gap-3'>
                        <button type='button' title='edit' className='w-5 h-5 bg-[#D7EBFF] flex items-center justify-center'>
                            <SlNote className='text-[#186CC3] w-4 h-4' />
                        </button>
                        <button type='button' title='delete' className='w-5 h-5 bg-[#FFDCDC] flex items-center justify-center'>
                            <FaRegTrashCan className='text-[#DD4040] w-4 h-4' />
                        </button>
                    </TableCell>
                </TableRow>
                <TableRow >
                    <TableCell>Mensagem</TableCell>
                    <TableCell className='pl-9'>Sem Anexo</TableCell>
                    <TableCell className='flex flex-row gap-3'>
                        <button type='button' title='edit' className='w-5 h-5 bg-[#D7EBFF] flex items-center justify-center'>
                            <SlNote className='text-[#186CC3] w-4 h-4' />
                        </button>
                        <button type='button' title='delete' className='w-5 h-5 bg-[#FFDCDC] flex items-center justify-center'>
                            <FaRegTrashCan className='text-[#DD4040] w-4 h-4' />
                        </button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>

    </div>
  )
}

export default Answers