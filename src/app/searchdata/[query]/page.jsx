"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

const Searchdata = ({params}) => {
    const {query} = params
    const [searchdata, setsearchdata] = useState([]);

    const router = useRouter()

    useEffect(() => {
        fetch(`https://movies-api14.p.rapidapi.com/search?query=${query}`, {
            method:'GET',
            headers: {
                'X-RapidAPI-Key': '3b1a4fac7bmshd779f247bcd3562p1b66eajsn88d4cb9facc4',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then((data) => {
            setsearchdata(data.contents);
        });
    }, [query])

    const handledetail = (id, contentType) => {
        if (contentType === "movie") {
            router.push(`/MovieDetail/${id}`);
        } else if (contentType === "show") {
            router.push(`/ShowDetail/${id}`);
        }
    }

    return (
        <div className='flex flex-wrap gap-2 justify-center items-center p-5'>
            {searchdata.map(d => (
                <div key={d._id} className='transform transition-transform hover:scale-110 p-2'>
                    <h6>{d.contentType}</h6>
                    <Image
                        src={d.poster_path}
                        height={50}
                        width={240}
                        alt='pic'
                        onClick={() => handledetail(d._id, d.contentType)}
                    />
                </div>
            ))}
        </div>
    )
}

export default Searchdata;
