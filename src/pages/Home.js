import React from 'react'
import yoga from './../images/Yoga - Relax.svg'

export default function Home() {
    return (
        <div className="container">
            <div className="container flex justify-center content-center space-x-14">
                <img src={yoga} alt="Motivado" className="xl:w-[55%] xl:h-[55%] md:w-[60%] md:h-[60%] w-[90%] h-[90%]" />
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <h1 className='text-4xl font-bold'>Motivado</h1>
                    <p className='text-xl'>The app is under construction</p>
                </div>
            </div>
        </div>
    )
}
