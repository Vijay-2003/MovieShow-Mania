"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

const Scifi = () => {

    const [trend, settrend] = useState([]);
    const router = useRouter()
    useEffect(() => {
        fetch('https://movies-api14.p.rapidapi.com/home', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3b1a4fac7bmshd779f247bcd3562p1b66eajsn88d4cb9facc4',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
              }
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                settrend(data[8].movies);
            })
    }, [])
    const handleshowdetail = (id) => {
        router.push(`/ShowDetail/${id}`);
    }

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
                                <div key={index} className='flex-shrink-0 w-60 mr-2 cursor-pointer transform transition-transform hover:scale-110'>
                                    <img className='w-full h-auto' src={d.poster_path} alt='trending pics'  onClick={() => handleshowdetail(d._id)} />
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