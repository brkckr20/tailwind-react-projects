import React from 'react'
import { Bars } from './Icons'

const Footer = () => {
    return (
        <div className='w-full bg-gray-100 py-16'>
            <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
                <div className='sm:flex text-center justify-between items-center'>
                    <h1>BEACHEs.</h1>
                    <div className='flex justify-between sm:max-w-[280px] w-full my-4'>
                        <Bars />
                        <Bars />
                        <Bars />
                        <Bars />
                        <Bars />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <ul className='lg:flex'>
                        <li>About</li>
                        <li>Partner</li>
                        <li>Careers</li>
                        <li>Careers</li>
                        <li>NewsRoom</li>
                        <li>NewsRoom</li>

                    </ul>
                    <ul className='lg:flex text-right'> 
                        <li>Home</li>
                        <li>Destinations</li>
                        <li>Travel</li>
                        <li>View</li>
                        <li>Book</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer