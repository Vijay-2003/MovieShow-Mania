"use client"
import React, { useEffect, useState } from 'react'

const Familytime = () => {

    const [trend, settrend] = useState([]);

    useEffect(() => {
        fetch('https://movies-api14.p.rapidapi.com/home', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8bdce9a8cemshd13478060ca5e16p1de2c8jsn3cf75b553f3c',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
              }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                settrend(data[4].movies);
            })
    }, [])

    return (
        <>
            <div>
                <div className='flex flex-col'>
                    <div>
                        <h1 className=' text-white p-2'>Family Time</h1>
                    </div>
                    <div className='overflow-hidden'>
                        <div className='flex flex-nowrap overflow-x-scroll'>
                            {trend.map((d) => (
                                <div key={d._id} className='flex-shrink-0 w-60 mr-2 cursor-pointer'>
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

export default Familytime