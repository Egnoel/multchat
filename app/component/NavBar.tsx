'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell, Mail, MessageSquareText, Search } from 'lucide-react';
import React, {useState} from 'react'

const NavBar = () => {
    const [searchText, setSearchText] = useState('');
  return (
    <div className='h-14 bg-gradient-to-r from-[#0C5DB0] to-[#05274A] flex flex-row justify-between items-center px-6'>
        <div className='flex flex-col text-sm'>
            <span className='text-white'>
                <span className='text-[#A0AEC0]'>pages</span> /
                Dashboard
            </span>
            <span className='text-white'>Dashboard</span>
        </div>
        <div className='flex flex-row gap-6 items-center'>
            <div className='flex flex-row items-center  bg-[#09427C] h-10 w-56 rounded-[48px] justify-center text-sm '>
                <input
                type="text"
                name="search"
                placeholder='pesquisar'
                title='search'
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
                className='border-none outline-none bg-transparent text-white placeholder-white w-44'
                />
                <Search className='rotate-90 text-white w-4 h-4' />
            </div>
            <div className='flex flex-row gap-8 items-center text-xs'>
                <div className='flex items-center'>
                    <div className='flex items-center justify-center rounded-full bg-[#09427C] w-8 h-8 absolute'>
                        <Mail className='w-4 h-4 text-white' />
                    </div>
                    <div className='w-4 h-4 mt-1 rounded-full bg-[#2D94FF] text-center relative top-[-13px] left-5'>36</div>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center justify-center rounded-full bg-[#09427C] w-8 h-8 absolute'>
                        <Bell className='w-4 h-4 text-white' />
                    </div>
                    <div className='w-4 h-4 mt-1 rounded-full bg-[#2D94FF] text-center relative top-[-13px] left-5'>36</div>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center justify-center rounded-full bg-[#09427C] w-8 h-8 absolute'>
                        <MessageSquareText className='w-4 h-4 text-white'/>
                    </div>
                    <div className='w-4 h-4 mt-1 rounded-full bg-[#2D94FF] text-center relative top-[-13px] left-5'>36</div>
                </div>
            </div>
            <Avatar className='w-8 h-8 flex items-center ml-3'>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

        </div>
    </div>
  )
}

export default NavBar