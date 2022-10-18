import React, { useState } from 'react'
import { Icon } from './Icons'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
                <div className='cursor-pointer' onClick={() => setNav(!nav)}>
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
                <Icon name="cart" size={20} /> <span className='ml-2'>Cart</span>
            </button>

            {/* mobile menu */}
            {/* overlay */}
            {
                nav ? (<div className='bg-black/80 fixed w-full h-screen z-10  top-0 left-0'></div>) : ''
            }
            

            {/* side draver menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
                <span className='text-purple-700 absolute right-4 top-4 cursor-pointer'><span onClick={() => setNav(!nav)}><Icon name="close" /></span></span>
                <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-4 flex'><Icon name="truck" /> <span className='ml-4'>Orders</span></li>
                        <li className='text-xl py-4 flex'><Icon name="hearth" /> <span className='ml-4'>Favorites</span></li>
                        <li className='text-xl py-4 flex'><Icon name="wallet" /> <span className='ml-4'>Wallet</span></li>
                        <li className='text-xl py-4 flex'><Icon name="help" /> <span className='ml-4'>Help</span></li>
                        <li className='text-xl py-4 flex'><Icon name="tag" /> <span className='ml-4'>Promotions</span></li>
                        <li className='text-xl py-4 flex'><Icon name="save" /> <span className='ml-4'>Best Ones</span></li>
                        <li className='text-xl py-4 flex'><Icon name="userplus" /> <span className='ml-4'>Invite Friends</span></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar