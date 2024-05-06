
import { Search } from 'lucide-react'
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AddAgendamento from '@/app/component/AddAgendamento';

const page = () => {
  return (
    <div className="top-[-24px] flex flex-col relative w-[90%]  h-screen bg-white rounded gap-6">
        <div className='flex flex-row w-full items-center justify-between px-4 py-6'>
          <h1 className='font-bold ml-3'>Agendamentos</h1>
          <div className='flex flex-row gap-3 items-center'>
            <div className='flex flex-row items-center border rounded px-2'>
              <input type="text" placeholder='Pesquisar' className='outline-none ml-2' />
              <Search className='rotate-90 text-black w-4 h-4' />
            </div>
            <Dialog>
              <DialogTrigger>
                <span className='text-center border border-[#186CC3] text-white bg-[#186CC3] px-4 rounded h-7 py-1'>Adicionar Contacto</span>
              </DialogTrigger>
              <DialogContent className='bg-[#F3F3F3] w-full'>
                <DialogHeader className='bg-[#F3F3F3]'>
                  <DialogTitle className='text-black '>Adicionar Contacto</DialogTitle>
                </DialogHeader>
                <AddAgendamento />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className='w-full'>
        <Table className=''>
            <TableHeader>
                <TableRow className=' bg-[#F4F4F4]'>
                    <TableHead>Nome</TableHead>
                    <TableHead>Mensagem</TableHead>
                    <TableHead>Data de agendamento</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow >
                    <TableCell className='flex flex-row gap-2 items-center'>
                      <Avatar className='w-4 h-4 flex items-center '>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <span>Paulo Tavares</span>
                    </TableCell>
                    <TableCell className=''>Texto texto texto</TableCell>
                    <TableCell className=''>paulotavares@gmail.com</TableCell>
                    <TableCell className=''>Pendente</TableCell>
                    <TableCell className='flex flex-row gap-3'>
                        <button type='button' title='edit' className='w-5 h-5 bg-[#D7EBFF] flex items-center justify-center'>
                            <SlNote className='text-[#186CC3] w-4 h-4' />
                        </button>
                        <button type='button' title='delete'  className='w-5 h-5 bg-[#FFDCDC] flex items-center justify-center'>
                            <FaRegTrashCan className='text-[#DD4040] w-4 h-4' />
                        </button>
                    </TableCell>
                </TableRow>
                <TableRow className=' bg-[#F4F4F4]'>
                <TableCell className='flex flex-row gap-2 items-center'>
                      <Avatar className='w-4 h-4 flex items-center '>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <span>Felizardo Moiséss</span>
                    </TableCell>
                    <TableCell className=''>Texto texto texto</TableCell>
                    <TableCell className=''>felizardomoisés@hotmail.com</TableCell>
                    <TableCell className=''>Pendente</TableCell>
                    <TableCell className='flex flex-row gap-3'>
                        <button type='button' title='edit' className='w-5 h-5 bg-[#D7EBFF] flex items-center justify-center'>
                            <SlNote className='text-[#186CC3] w-4 h-4' />
                        </button>
                        <button type='button' title='delete'  className='w-5 h-5 bg-[#FFDCDC] flex items-center justify-center'>
                            <FaRegTrashCan className='text-[#DD4040] w-4 h-4' />
                        </button>
                    </TableCell>
                </TableRow>
                <TableRow >
                <TableCell className='flex flex-row gap-2 items-center'>
                      <Avatar className='w-4 h-4 flex items-center '>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <span>Gustavo Dalas</span>
                    </TableCell>
                    <TableCell className=''>Texto texto texto</TableCell>
                    <TableCell className=''>gustavodalas@gmail.com</TableCell>
                    <TableCell className=''>Pendente</TableCell>
                    <TableCell className='flex flex-row gap-3'>
                        <button type='button' title='edit' className='w-5 h-5 bg-[#D7EBFF] flex items-center justify-center'>
                            <SlNote className='text-[#186CC3] w-4 h-4' />
                        </button>
                        <button type='button' title='delete'  className='w-5 h-5 bg-[#FFDCDC] flex items-center justify-center'>
                            <FaRegTrashCan className='text-[#DD4040] w-4 h-4' />
                        </button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </div>
    </div>
  )
}

export default page