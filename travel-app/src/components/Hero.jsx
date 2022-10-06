import React from 'react'
import beachVideo from '../assets/beachVid.mp4';
import { Search } from './Icons';

const Hero = () => {
    return (
        <div className='w-full h-screen relative'>
            <video
                className='w-full h-full object-cover'
                autoPlay={true}
                loop
                muted
                src={beachVideo}
            />
            <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center p-4 text-white'>
                <h1>First class travel</h1>
                <h2 className='py-4'>Top 1% Locations WorldWide</h2>
                <form className='flex justify-between items-center max-w-[700px] mx-auto w-full p-1 rounded-md text-black bg-gray-100/90'>
                    <div>
                        <input className='bg-transparent w-[300px] sm:w-[400px] focus:outline-none' type="text" placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button><Search className={`w-6 h-6`} /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero