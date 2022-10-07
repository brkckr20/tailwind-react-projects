import React from 'react'
import { Phone, Travel } from './Icons'

const Search = () => {
    return (
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4 px-4 py-16'>
            <div className='lg:col-span-2 flex flex-col justify-evenly'>
                <div>
                    <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                    <p className='py-4 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda incidunt vitae impedit corrupti reiciendis nisi, earum a soluta perspiciatis cupiditate sunt quidem aliquam illum tenetur ex nulla officia numquam architecto, obcaecati saepe! Aliquid quae placeat culpa velit error, iste adipisci consequuntur, nulla in praesentium quis quasi voluptate minus ducimus cupiditate.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum maxime laudantium aperiam voluptatibus repudiandae deserunt sit facilis repellendus fuga minus.
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 gap-8 py-4'>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button>
                            <Phone />
                        </button>
                        <div>
                            <h3 className='font-bold'>LEADING SERVICE</h3>
                            <p className='font-semibold'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button>
                            <Travel />
                        </button>
                        <div>
                            <h3 className='font-bold'>AUTOMATED BOOKING</h3>
                            <p className='font-semibold'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div>
                <div className='border text-center p-4'>
                    <p className='pt-2'>GET ADDITIONAL 10% OFF</p>
                    <p className='py-4'>12 HOURS LEFT</p>
                    <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
                </div>
                <form className='w-full'>
                    <div className='flex flex-col my-2'>
                        <label>Destination</label>
                        <select className='border rounded-md p-2'>
                            <option>Grand Antigua</option>
                            <option>Key West</option>
                            <option>Maldives</option>
                            <option>Cozumel</option>
                        </select>
                    </div>
                    <div className='flex flex-col my-4'>
                        <label>Check-In</label>
                        <input type="date" className='border rounded-md p-2' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label>Check-out</label>
                        <input type="date" className='border rounded-md p-2' />
                    </div>
                    <div>
                        <button className='w-full my-4'>Rates & Avalibiliates</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Search