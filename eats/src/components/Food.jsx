import React from 'react';
import { data } from '../data/data'

const Food = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
            {/* Filter row */}
            <div className='flex flex-col lg:flex-row justify-between'>

                {/* filter type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-150 m-1'>All</button>
                        <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-150 m-1'>Burgers</button>
                        <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-150 m-1'>Pizza</button>
                        <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-150 m-1'>Salads</button>
                        <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-150 m-1'>Chicken</button>
                    </div>
                </div>
                {/* filtered price */}
                <div>
                    <p>Filter Price</p>
                    <div>
                        <button>$</button>
                        <button>$$</button>
                        <button>$$$</button>
                        <button>$$$$</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Food