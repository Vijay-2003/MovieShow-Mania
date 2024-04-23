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
                'X-RapidAPI-Key': '37d3df8fedmshd9afe73c108433cp19a041jsnb83df1edc147',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
              }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                settrend(data[0].movies);
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
    <Carousel activeIndex={index} onSelect={handleSelect} >
      {trend.map((d) => (
        <Carousel.Item onClick={() => bannerdetail(d._id)}>
        <img className=' w-full object-contain h-max ' src={d.poster_path} alt='movieshows'  />
      </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
