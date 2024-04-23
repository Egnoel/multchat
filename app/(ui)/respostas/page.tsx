import AddAnswer from '@/app/component/AddAnswer'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const page = () => {
  return (
    <div className="top-[-24px] flex flex-row relative w-[90%]  h-screen bg-white">
        <div className='w-1/2 flex justify-center items-center'>
          <AddAnswer />
        </div>
        <Separator orientation='vertical' className='bg-[#ECECEC] h-full' />
        <div className='w-1/2'>2</div>
    </div>
  )
}

export default page