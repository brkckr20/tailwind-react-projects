import React from 'react'
import { Icon } from './Icons'
const Navbar = () => {
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            <div>
                <div>
                    <Icon name="menu" size={30} />
                </div>
                <h1>Best <span> Eats</span></h1>
                <div>
                    <p>Delivery</p>
                    <p>Pickup</p>
                </div>
            </div>

        </div>
    )
}

export default Navbar