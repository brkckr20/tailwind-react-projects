import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from './Icons';

const sliderData = [
    {
        url: 'https://picsum.photos/1920/1080'
    },
    {
        url: 'https://picsum.photos/1920/1081'
    },
    {
        url: 'https://picsum.photos/1920/1082'
    },
    {
        url: 'https://picsum.photos/1920/1083'
    }
]

const Carousel = () => {
    const [slide, setSlide] = useState(0);
    const length = sliderData.length;

    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1)
    }
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1)
    }

    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
            <span className="absolute top-[50%] text-3xl cursor-pointer text-white left-8" onClick={prevSlide}>
                <ArrowLeft />
            </span>
            <span className="absolute top-[50%] text-3xl cursor-pointer text-white right-8" onClick={nextSlide}>
                <ArrowRight />
            </span>

            {
                sliderData.map((item, index) => (
                    <div key={index} className={index === slide ? 'opacity-100' : 'opacity-0'}>
                        {
                            index === slide && (
                                <img className='w-full rounded-md' src={item.url} alt="/" />
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Carousel