import React from 'react'
import newProject from './../images/New Project.svg'

export default function Landing() {
    return (
        <div>
            <div className="container flex flex-col md:flex-row content-center space-x-14">
                <img src={newProject} alt="Motivado" className="xl:w-[53%] xl:h-[53%] md:w-[60%] md:h-[60%] w-[90%] h-[90%]" />
                <p className='hidden lg:contents'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <h1 className='text-7xl font-bold hidden md:contents'>Motivado</h1>
                    <p className='text-xl'>The app is under construction</p>
                </div>
            </div>
        </div>
    )
}
