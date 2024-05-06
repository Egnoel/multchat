import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import React from 'react'

const AddAgendamento = () => {
  return (
    <div className='bg-white w-full flex flex-col gap-3 px-2 py-1'>
        <span>Dados do contacto</span>
        <div>
            <label htmlFor="contacto">Contacto</label>
            <Select>
                <SelectTrigger >
                    <SelectValue placeholder="Selecionar" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="texto">Mensagem</label>
            <textarea name="texto"
            id="texto"
            cols={10}
            rows={3}
            placeholder="Texto"
            className="border px-1 py-1"
            />
        </div>
        <Button className='bg-[#186CC3] text-white'>Adicionar</Button>
    </div>
  )
}

export default AddAgendamento