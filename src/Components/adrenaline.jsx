"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

const Adrenaline = () => {

    const [trend, settrend] = useState([]);
    const router = useRouter()
    useEffect(() => {
        fetch('https://movies-api14.p.rapidapi.com/home', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'afbd374dc7mshea061cb27cf118bp114905jsn2772060f10bd',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
              }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                settrend(data[7].movies);
            })
    }, [])

    const handletail = (id) => {
        router.push(`/MovieDetail/${id}`)
    }
    return (
        <>
            <div>
                <div className='flex flex-col'>
                    <div>
                        <h1 className=' text-white p-2'>Get A Shot Of Adrenaline</h1>
                    </div>
                    <div className='overflow-hidden'>
                        <div className='flex flex-nowrap overflow-x-scroll'>
                            {trend.map((d, index) => (
                                <div key={index} className='flex-shrink-0 w-60 mr-2 cursor-pointer transform transition-transform hover:scale-110' >
                                    <img className='w-full h-auto' src={d.poster_path} alt='trending pics' onClick={() => handletail(d._id)} />
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