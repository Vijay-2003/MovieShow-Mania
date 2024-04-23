"use client"
import React, { useEffect, useState } from 'react'

const Adrenaline = () => {

    const [trend, settrend] = useState([]);

    useEffect(() => {
        fetch('https://movies-api14.p.rapidapi.com/home', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '770c9e5ebdmsh5132a481cc431fep18f7a3jsn5bb845ba0219',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                settrend(data[7].movies);
            })
    }, [])

    return (
        <>
            <div>
                <div className='flex flex-col'>
                    <div>
                        <h1>Get A Shot Of Adrenaline</h1>
                    </div>
                    <div className='overflow-hidden'>
                        <div className='flex flex-nowrap overflow-x-scroll'>
                            {trend.map((d, index) => (
                                <div key={index} className='flex-shrink-0 w-60 mr-2'>
                                    <img className='w-full h-auto' src={d.poster_path} alt='trending pics' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adrenaline