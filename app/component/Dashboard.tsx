'use client'
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    scales,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    scales:{
        x: {
            grid:{
                display: false,
            },
            border:{
                display: false,
            }
        },
        y: {
            grid:{
                display: false,
            },
            border:{
                display: false,
            },
            ticks: {
                precision: 0
            }
        },
    },

    plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
  };

  const labels = ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00','11:00','12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'];

  export const data = {
    labels,
    datasets: [
      {
        label:'',
        data: labels.map(() => Math.floor(Math.random() * 5)),
        backgroundColor: 'rgb(2, 160, 252)',
      },
      {
        label:'',
        data: labels.map(() => Math.floor(Math.random() * 5)),
        backgroundColor: 'rgb(52, 181, 58)',
      },
    ],
  };


const Dashboard = () => {
  return (
    <div className="bg-white w-full p-4 flex flex-col gap-3">
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-5 items-center'>
                    <span className='text-[#6E6B7B] font-bold'>Atendimentos hoje</span>
                    <div className='flex flex-row gap-2'>
                        <div className='flex flex-row gap-1 items-center'>
                            <div className='w-3 h-3 rounded-full bg-[#02A0FC]'></div>
                            <span>Subida</span>
                        </div>
                        <div className='flex flex-row gap-1 items-center'>
                            <div className='w-3 h-3 rounded-full bg-[#34B53A]'></div>
                            <span>Descida</span>
                        </div>
                    </div>
            </div>
            <div className='flex flex-row gap-3'>
                <Button className='text-center bg-[#E3E3E3] w-16 rounded-[10px]'>Hoje</Button>
                <div className='flex flex-row items-center justify-center gap-3 bg-[#E3E3E3] w-24 rounded-[10px]'>
                    <span>Mês</span>
                    <ChevronDown />
                </div>
                <div className='flex flex-row items-center justify-center gap-3 bg-[#E3E3E3] w-24 rounded-[10px]'>
                    <span>Dia</span>
                    <ChevronDown />
                </div>
                <Button className='bg-blue-500 rounded-[10px] w-20 text-white'>Filtrar</Button>
            </div>
        </div>
        <Bar options={options} data={data} height={50} />
    </div>
  )
}

export default Dashboard