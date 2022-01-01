import React from 'react'

export default function Contributors() {
    function Card(props) {
        return (
            <div className="bg-gray-50 border-gray-400 rounded-lg shadow-xl p-4 flex justify-center align-middle space-x-3">
                <a href={props.link} target='_blank' rel="noreferrer">
                    <img src={props.image} alt={props.name} className='rounded-full object-contain w-[160px] shadow-md' />
                </a>
                <div className="p-4 text-gray-600 text-center">
                    <div className="h-[5vh]"></div>
                    <h1 className="text-2xl text-black">{props.name}</h1>
                    <p className="card-text text-md">{props.description}</p>
                </div>
            </div>
        )
    }
    return (
        <div className='container flex flex-col justify-center space-x-11 space-y-11'>
            <br />
            <h1 className='text-4xl font-bold'>Founders</h1>
            <div className='container'>
                <div className="md:flex space-x-8">
                    <Card image='https://avatars.githubusercontent.com/u/69100224' name='Bartick Maiti' description='Developer' link='https://github.com/bartick' />
                    <Card image='https://avatars.githubusercontent.com/u/30210770' name='Advaita Saha' description='Developer' link='https://github.com/advaita-saha' />
                </div>
            </div>
            <div className="h-[3vh]"></div>
        </div>
    )
}
