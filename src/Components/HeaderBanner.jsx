"use client"
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useRouter } from 'next/navigation';

const ControlledCarousel = () => {

  const [trend, settrend] = useState([]);
  const router = useRouter();
    
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
                console.log(data);
                settrend(data[0].movies);
                // settrend(data[5].movies);
            })
    }, [])

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const bannerdetail = (id) => {
      router.push(`/MovieDetail/${id}`)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {trend.map((d) => (
        <Carousel.Item  key={d._id} onClick={() => bannerdetail(d._id)}>
        <img  className='w-full object-cover cursor-pointer' src={d.poster_path} alt='movieshows'  />
      </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
