"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Searchdata = ({params}) => {
    const {query} = params
    const [searchdata, setsearchdata] = useState([]);


 useEffect(() => {
    fetch(`https://movies-api14.p.rapidapi.com/search?query=${query}`, {
        method:'GET',
        headers: {
          'X-RapidAPI-Key': '8bdce9a8cemshd13478060ca5e16p1de2c8jsn3cf75b553f3c',
          'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
        }
      }).then(response => response.json()).then((data) => {
        console.log(data);
        setsearchdata(data.contents);
      })
 },[query])

  return (
    <div className=' flex flex-wrap gap-2 justify-center items-center p-5'>
{
    searchdata.map(d => (
        <div key={d._id} className=' transform transition-transform hover:scale-110 p-2'>
            <Image src={d.poster_path} height={50} width={240}  alt='pic' />
        </div>
    ))
}
    </div>
  )
}

export default Searchdata