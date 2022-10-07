import React from 'react';

import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import keywest from '../assets/keywest.jpg';
import maldives from '../assets/maldives.jpg';
import maldives2 from '../assets/maldives2.jpg';

const Destinations = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
            <h1>All-Inclusive Resorts</h1>
            <p className='py-4'>On the Caribbean's Best Beaches</p>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={BoraBora} alt="borabora" />
                <img className='w-full h-full object-cover' src={BoraBora2} alt="BoraBora2" />
                <img className='w-full h-full object-cover' src={maldives} alt="bormaldivesbora" />
                <img className='w-full h-full object-cover' src={maldives2} alt="maldives2" />
                <img className='w-full h-full object-cover' src={keywest} alt="keywest" />
            </div>
        </div>
    )
}

export default Destinations