import React from 'react'

const HeadLineCards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* card */}
            <div className='rounded-xl overflow-hidden relative'>
                {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, OGO's Out</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='border-white bg-white mx-2 text-black absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.unsplash.com/photo-1579932709647-3a151893f730?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="/" />
            </div>
            {/* card */}
            <div className='rounded-xl overflow-hidden relative'>
                {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                    <p className='px-2'>Added Daily</p>
                    <button className='border-white bg-white mx-2 text-black absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.unsplash.com/photo-1657299170950-87e5b0eaf77c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="/" />
            </div>
            {/* card */}
            <div className='rounded-xl overflow-hidden relative'>
                {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>We Delivery Desserts Too</p>
                    <p className='px-2'>Tasty Treats</p>
                    <button className='border-white bg-white mx-2 text-black absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.unsplash.com/photo-1580822656752-1f113169c5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="/" />
            </div>
        </div>
    )
}

export default HeadLineCards