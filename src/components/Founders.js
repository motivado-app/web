import React from 'react'

export default function Contributors() {
    const founders = [
        [
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
        ],
        [
            {
                name: 'Anushka Kohli',
                description: 'Public Relations',
                image: require('./../images/anuska.jpeg'),
                link: 'https://www.linkedin.com/in/anushka-kohli-9410771b8',
            },
        ]
    ]
    function Card(props) {
        return (
            <div className="bg-gray-100 border-gray-400 rounded-lg shadow-xl p-4 flex justify-center align-middle space-x-3">
                <a href={props.link} target='_blank' rel="noreferrer" className='w-[150px] h-[150px]'>
                    <img src={props.image} alt={props.name} className='rounded-full object-contain w-[150px] h-[150px] shadow-md' />
                </a>
                <div className="p-4 text-gray-600 text-center">
                    <div className="h-[5vh]"></div>
                    <h1 className="text-2xl text-black">{props.name}</h1>
                    <p className="card-text text-sm">{props.description}</p>
                </div>
            </div>
        )
    }
    return (
        <div className='container flex flex-col justify-center space-x-11 space-y-11'>
            <br />
            <h1 className='text-4xl font-bold text-center'>Founders</h1>
            <div className='container space-y-8'>
                    {founders.map((founder, index) => {
                        return (
                            <div key={index} className="md:flex space-x-8 md:flex-row md:flex-wrap justify-center">
                                {founder.map((people, ind) => {
                                    return <Card key={index+ind} {...people} />
                                })}
                            </div>
                        )
                    })}
            </div>
            <div className="h-[3vh]"></div>
        </div>
    )
}
