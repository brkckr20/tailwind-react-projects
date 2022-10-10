import React from 'react'
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import keywest from '../assets/keywest.jpg';
import maldives from '../assets/maldives.jpg';
import maldives2 from '../assets/maldives2.jpg';
import maldives3 from '../assets/maldives3.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

            <SelectsCard bg={BoraBora} text="Borabora"/>
            <SelectsCard bg={BoraBora2} text="BoraBora2"/>
            <SelectsCard bg={keywest} text="keywest"/>
            <SelectsCard bg={maldives} text="maldives"/>
            <SelectsCard bg={maldives2} text="maldives2"/>
            <SelectsCard bg={maldives3} text="maldives3"/>

        </div>
    )
}

export default Selects