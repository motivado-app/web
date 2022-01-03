import React from 'react'

export default function Teams() {
    const members = [
        {
            name: 'Advaita Saha',
            description: 'Developer',
            image: 'https://avatars.githubusercontent.com/u/30210770',
            link: 'https://www.linkedin.com/in/advaita-saha/',
        },
        {
            name: 'Bartick Maiti',
            description: 'Developer',
            image: 'https://avatars.githubusercontent.com/u/69100224',
            link: 'https://www.linkedin.com/in/bartick-maiti-83952721a/',
        },
        {
            name: 'Arka Roy',
            description: 'Public Relations',
            image: require('./../images/arko_roy_pr.jpeg'),
            link: 'https://www.linkedin.com/in/arka-roy-057081223',
        },
        {
            name: 'Anushka Kohli',
            description: 'Public Relations',
            image: require('./../images/anuska.jpeg'),
            link: 'https://www.linkedin.com/in/anushka-kohli-9410771b8',
        },
    ]

    function Card(props) {
        return (
            <div className="bg-gray-100 border-gray-400 rounded-lg shadow-xl p-4 flex justify-center align-middle mr-2 mb-4 ml-2 md:mr-4 md:ml-4">
                <a href={props.link} target='_blank' rel="noreferrer" className='md:w-[150px] md:h-[150px] w-[120px] h-[120px]'>
                    <img src={props.image} alt={props.name} className='rounded-full object-contain md:w-[150px] md:h-[150px] w-[120px] h-[120px] shadow-md' />
                </a>
                <div className="p-4 text-center">
                    <div className="md:h-[5vh] h-[3vh]"></div>
                    <h1 className="text-2xl text-black">{props.name}</h1>
                    <p className="text-gray-600 text-sm">{props.description}</p>
                </div>
            </div>
        )
    }

    return (
        <div className='mb-3 mt-3'>
            <br />
            <h1 className='text-4xl font-bold text-center'>Our Team</h1>
            <br />
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {members.map((member, index) => {
                    return(
                        <Card key={index} {...member} />
                    )
                })}
            </div>
        </div>
    )
}
