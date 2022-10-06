import React, { useState } from 'react'
import { User, Search, Bars, Close, Face, Img, At, Bolt, Cube } from './Icons'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }

    return (
        <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
            <div>
                <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACHEs.</h1>
            </div>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
            <div className='hidden md:flex'>
                <Search className="w-6" />
                <User />
            </div>

            {/* Hamburger */}
            <div onClick={handleNav} className='md:hidden z-10'>
                {
                    nav ? <Close /> : <Bars />
                }
            </div>

            {/* mobil menu dropdown  */}

            <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
                <ul>
                    <h1>BEACHEs.</h1>
                    <li className='border-b '>Home</li>
                    <li className='border-b '>Destinations</li>
                    <li className='border-b '>Travel</li>
                    <li className='border-b '>View</li>
                    <li className='border-b '>Book</li>
                    <div className='flex flex-col'>
                        <button className='my-6'>Search</button>
                        <button>Account</button>
                    </div>
                    <div className='icon flex justify-between my-6'>
                        <Face />
                        <Img />
                        <At />
                        <Bolt />
                        <Cube />
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar