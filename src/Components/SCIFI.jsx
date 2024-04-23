"use client"
import React, { useEffect, useState } from 'react'

const Scifi = () => {

    const [trend, settrend] = useState([]);

    useEffect(() => {
        fetch('https://movies-api14.p.rapidapi.com/home', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '37d3df8fedmshd9afe73c108433cp19a041jsnb83df1edc147',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
              }
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                settrend(data[8].movies);
            })
    }, [])

    return (
        <>
            <div>
                <div className='flex flex-col'>
                    <div>
                        <h1 className=' text-white p-2'>Sci-Fi TV/Movies</h1>
                    </div>
                    <div className='overflow-hidden'>
                        <div className='flex flex-nowrap overflow-x-scroll'>
                            {trend.map((d, index) => (
                                <div key={index} className='flex-shrink-0 w-60 mr-2 cursor-pointer'>
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

export default Scifi