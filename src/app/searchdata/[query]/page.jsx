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
          'X-RapidAPI-Key': 'afbd374dc7mshea061cb27cf118bp114905jsn2772060f10bd',
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