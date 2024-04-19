import React from 'react'
import { Columns, Info } from './Columns'
import { DataTable } from './data-table'

const TableComponent = () => {
    const data:Info[] = [{
        id: '728ed52f',
        nome:'Paulo Jorge',
        avaliações: 3,
        status:'activo',
        atendimento:'00h 00m',
    },
    {
        id: '028er52f',
        nome:'Paulo Jorge',
        avaliações: 3,
        status:'activo',
        atendimento:'00h 00m',
    },
    {
        id: '928ed52f',
        nome:'Paulo Jorge',
        avaliações: 3,
        status:'activo',
        atendimento:'00h 00m',
    },
    {
        id: '828ed52f',
        nome:'Paulo Jorge',
        avaliações: 3,
        status:'activo',
        atendimento:'00h 00m',
    },
    {
        id: '328ed52f',
        nome:'Paulo Jorge',
        avaliações: 3,
        status:'activo',
        atendimento:'00h 00m',
    },
    {
        id: '228ed52f',
        nome:'Paulo Jorge',
        avaliações: 3,
        status:'activo',
        atendimento:'00h 00m',
    },
    {
        id: '128ed52f',
        nome:'Paulo Jorge',
        avaliações: 3,
        status:'activo',
        atendimento:'00h 00m',
    },
    {
        id: '628ed52f',
        nome:'Paulo Jorge',
        avaliações: 3,
        status:'activo',
        atendimento:'00h 00m',
    },
    {
        id: '528ed52f',
        nome:'Paulo Jorge',
        avaliações: 3,
        status:'activo',
        atendimento:'00h 00m',
    },
    {
        id: '428ed52f',
        nome:'Paulo Jorge',
        avaliações: 3,
        status:'activo',
        atendimento:'00h 00m',
    },
    {
        id: '428ed52g',
        nome:'Paulo Jorge',
        avaliações: 3,
        status:'activo',
        atendimento:'00h 00m',
    },
]
  return (
    <div className=" w-full">
        <DataTable columns={Columns} data={data} />
    </div>
  )
}

export default TableComponent