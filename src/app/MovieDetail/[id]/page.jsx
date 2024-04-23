"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const MovieDetail = ({ params }) => {

  const [moviedata, setdata] = useState({});
  const [similarmoviedata, setsimilardata] = useState([]);
  const { id } = params
  const router = useRouter();

  useEffect(() => {
    fetchMovies();
  }, [id])

  const fetchMovies = () => {
    fetch(`https://movies-api14.p.rapidapi.com/movie/${id}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '37d3df8fedmshd9afe73c108433cp19a041jsnb83df1edc147',
        'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data.movie);
        console.log(data);
        setdata(data.movie);
        setsimilardata(data.similarMovies)
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  const similardata = (id) => {
    router.push(`/MovieDetail/${id}`)
  }

  // console.log(moviedata.original_title)
  return (
    <div>
      <div>
        <img src={moviedata.poster_path} />
        <img src={moviedata.backdrop_path
        } />

      </div>
      <div key={moviedata._id}>
        <h1>{moviedata.original_title}</h1>
        <a href={moviedata.youtube_trailer}>Watch Trailer</a>
        {moviedata.youtube_trailer && (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${moviedata.youtube_trailer.split('=')[1]}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        <h4>{moviedata.overview}</h4>

        <div className=''>
        {
          similarmoviedata.map(d => (
            <div key={d._id}>
              <div onClick={() => similardata(d._id)}>
              <img className='' src={d.poster_path
                } />
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default MovieDetail