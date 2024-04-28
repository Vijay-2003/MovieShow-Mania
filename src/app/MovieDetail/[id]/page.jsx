"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const MovieDetail = ({ params }) => {

  const [moviedata, setdata] = useState({});
  const [genres, setgenres] = useState([]);
  const [source, setsource] = useState([])
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
        'X-RapidAPI-Key': 'afbd374dc7mshea061cb27cf118bp114905jsn2772060f10bd',
        'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data.movie);
        console.log(data);
        setdata(data.movie);
        setgenres(data.movie.genres)
        setsimilardata(data.similarMovies)
        setsource(data.movie.sources)
        console.log(data.movie.sources)
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  const similardata = (id) => {
    router.push(`/MovieDetail/${id}`)
  }

  // console.log(moviedata.original_title)
  console.log(genres);
  return (
    <div className="flex flex-col items-center p-3">
      <div>
        <img src={moviedata.backdrop_path} alt="pic" className="w-full" />
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center items-start p-4">
        <div className="w-full md:w-1/4">
          <img src={moviedata.poster_path} alt="pic" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-3/4 flex flex-col text-white p-4">
          <h1 className="text-3xl font-bold mb-2">{moviedata.original_title}</h1>
          <h2 className="text-xl font-semibold mb-2">Rating: {moviedata.vote_average}</h2>
          <h2 className="text-gray-500 mb-4">{moviedata.release_date}</h2>
          <div className="flex flex-wrap text-gray-400 mb-4">
            <h4 className="mr-2">Genres:</h4>
            {genres.map((d, index) => (
              <h4 key={index} className="mr-2">{d}</h4>
            ))}
          </div>
          <h5 className="mb-4">{moviedata.overview}</h5>

          <div className='flex flex-wrap mb-4'>
            <h3 className=" text-gray-400 mr-2">Available Sources:</h3>
            {source.map((d, index) => (
              <h3 key={index} className=" text-blue-600 mr-2">
                <a href={d.link} target='window2' className='no-underline'>{d.display_name},</a>
              </h3>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full p-1">
        <h2 className="text-white p-2">Trailer</h2>
        {moviedata.youtube_trailer && (
          <iframe
            width="100%"
            height="415"
            src={`https://www.youtube.com/embed/${moviedata.youtube_trailer.split('=')[1]}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className="w-full">
        <h1 className="text-white p-4">Similar Movies</h1>
        <div className="overflow-hidden">
          <div className="flex flex-nowrap overflow-x-scroll">
            {similarmoviedata.map((d, index) => (
              <div key={index} className="flex-shrink-0 w-60 mr-2 cursor-pointer transform transition-transform hover:scale-110">
                <img className="w-full h-auto" src={d.poster_path} alt="trending pics" onClick={() => similardata(d._id)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail