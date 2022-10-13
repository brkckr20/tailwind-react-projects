import React from 'react'
import { Icon } from './Icons'
const Navbar = () => {
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
                <div>
                    <Icon name="menu" size={30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'> Eats</span></h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-sm'>
                    <p className='text-white bg-black rounded-full p-2'>Delivery</p>
                    <p>Pickup</p>
                </div>
            </div>
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <Icon name="search" size={20} />
                <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search foods' />
            </div>


            <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
                <Icon name="cart" size={20}/> <span className='ml-2'>Cart</span>
            </button>

        </div>
    )
}

export default Navbar