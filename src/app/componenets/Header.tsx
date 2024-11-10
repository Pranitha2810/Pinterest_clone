import React from 'react'
import Image from 'next/image'
import { HiSearch,HiBell,HiChat } from 'react-icons/hi';
function Header() {
  return (
    <div className='flex gap-3 items-center p-6'>
       <Image src='/pinterest_logo.png' alt='logo' width={50} height={50} className='hover:bg-gray-300 rounded-full p-2 cursor-pointer'/>
       <button className='bg-black text-white rounded-full p-2'>Home</button>
       <button className='font-semibold text-black'>Create</button>
       <div className='bg-[#e9e9e9] p-2 flex gap-3 items-center rounded-full w-full'>
        <HiSearch className='text-[25px] text-gray-500'/>
        <input type='text' placeholder='Search' className='bg-transparent outline-none'/> 
       </div>
       <HiBell className='text-[40px] text-gray-500'/>
        <HiChat className='text-[40px] text-gray-500'/>
        <Image src='/man_logo.jpeg' alt='user-logo' width={50} height={50} className='hover:bg-gray-300 rounded-full p-2 cursor-pinter'/>
    </div>
  )
}

export default Header