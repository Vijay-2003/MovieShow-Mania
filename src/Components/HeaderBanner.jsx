"use client"
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useRouter } from 'next/navigation';

function ControlledCarousel() {

  const [trend, settrend] = useState([]);
  const router = useRouter()
    
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
      router.push(`MovieDetail/${id}`)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      {trend.map((d) => (
        <Carousel.Item onClick={() => bannerdetail(d._id)}>
        <img className=' w-full object-contain h-max ' src={d.poster_path} alt='movieshows'  />
      </Carousel.Item>
      ))}
      {/* <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default ControlledCarousel;
