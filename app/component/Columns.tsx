'use client'
import React from 'react'
import { ColumnDef } from "@tanstack/react-table"
import Image from 'next/image'
import { FaStar } from "react-icons/fa";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Info = {
    id: string
  nome: string
  avaliações: number
  status: "activo" | "processing" | "success" | "failed"
  atendimento: string
}

export const Columns:ColumnDef<Info>[]  =[
    {
        header: "Nome",
        accessorKey: "nome",
        cell: ({ row }) => {
            return <div className="flex flex-row gap-2">
                <Image src="https://github.com/shadcn.png" width={20} height={20} className="rounded-full" alt='avatar' />
                {row.getValue('nome')}
            </div>
          },
    },
    {
        header: "Avaliações",
        accessorKey: "avaliações",
        cell: ({ row }) => {
            const avaliações = parseFloat(row.getValue("avaliações"))
            const formatted = Array.from({ length: 5 }).map((_, index) => {
                const fill = index < avaliações ? "text-yellow-500" : "text-gray-300"
                return <FaStar key={index} className={`text-xl ${fill}`} />
            })
            return <div className="flex flex-row gap-1">{formatted}</div>
          },
    },
    {
        header: "T.M. Atendimento",
        accessorKey: "atendimento",
    },
    {
        header: "Status(Atual)",
        accessorKey: "status",
    },
]

