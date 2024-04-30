"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ShowsHomes() {

    const [showsdata, setshows] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const router = useRouter()
    useEffect(() => {
        fetchshows();
    }, [currentPage])

    const fetchshows = () => {
        fetch(`https://movies-api14.p.rapidapi.com/shows?page=${currentPage}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '46decb6978mshb4001282700709ap169619jsnc3a0bfd77551',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            }
        }).then(response => response.json()).then((data) => {
            setshows(data.movies);
            // console.log(data);
        })
    }

    const handledetail = (id) => {
        router.push(`/ShowDetail/${id}`)
    }

    return (
        <div>
            <div className="flex justify-center items-center gap-4 p-4">
                {currentPage > 1 && (
                    <button
                        className="text-gray-300 p-2 border-2 border-gray-200 rounded-xl transition-colors hover:text-white"
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        Previous Page
                    </button>
                )}
                <button
                    className=" text-gray-300 p-2 border-2 border-gray-200 rounded-xl transition-colors hover:text-white"
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next Page
                </button>
            </div>


            <div className=" flex flex-wrap gap-3 justify-center items-center ">
                {showsdata.map(data => (
                    <div key={data._id}
                        className=" cursor-pointer transform transition-transform hover:scale-110">
                        {/* <div className=" clear-none">{data.original_title}</div> */}
                        <Image src={data.poster_path} height={50} width={240} alt="Pic" onClick={() => handledetail(data._id)} />
                    </div>
                ))}
            </div>
        </div>
    )
}