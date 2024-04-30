"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

const NewMovies = () => {

    const [New, setNew] = useState([]);
    const router = useRouter();
    useEffect(() => {
        fetch('https://movies-api14.p.rapidapi.com/home', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '46decb6978mshb4001282700709ap169619jsnc3a0bfd77551',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
              }
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setNew(data[1].movies);
            })
    }, [])

    const handledetail = (id) => {
        router.push(`/MovieDetail/${id}`)
    }
    return (
        <>
            <div>
                <div className='flex flex-col'>
                    <div>
                        <h1 className=' text-white p-2'>New Movies</h1>
                    </div>
                    <div className='overflow-hidden'>
                        <div className='flex flex-nowrap overflow-x-scroll'>
                            {New.map((d, index) => (
                                <div key={index} className='flex-shrink-0 w-60 mr-2 cursor-pointer transform transition-transform hover:scale-110'>
                                    <img className='w-full h-auto' src={d.poster_path} alt='trending pics' onClick={() => handledetail(d._id)} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewMovies