import React from 'react'

const Cards = ({src, title, desc}) => {
    return (
        <div className="md:max-w-[17rem] bg-[#d0d3c5]">
            <div className='md:h-[20rem] h-[15rem] w-full'>
                <img src={src} alt={src} className='h-full w-full md:w-auto object-cover'></img>
            </div>

            <div className='text-black p-5 h-auto'>
                <h1 className='font-sora font-semibold text-xl'>{title}</h1>
                <p className="inter opacity-90 mt-2">{desc}</p>
            </div>
        </div>
    )
}

export default Cards