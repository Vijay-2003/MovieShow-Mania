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
                'X-RapidAPI-Key': '8bdce9a8cemshd13478060ca5e16p1de2c8jsn3cf75b553f3c',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
              }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                settrend(data[0].movies);
                settrend(data[5].movies);
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
        <Carousel.Item key={d._id} onClick={() => bannerdetail(d._id)}>
        <img src={d.poster_path} alt='movieshows'  />
      </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
