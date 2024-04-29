"use client"
import React, { useEffect, useState } from 'react';

const ShowDetail = ({ params }) => {
  const { id } = params;
  const [showdetail, setshowdetail] = useState({});
  const [genres, setgenres] = useState([]);
  const [source, setsource] = useState([]);
  const [seasonsdata, setseasonsdata] = useState([]);

  useEffect(() => {
    fetchshowdetail();
  }, [id]);

  const fetchshowdetail = () => {
    fetch(`https://movies-api14.p.rapidapi.com/show/${id}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3b1a4fac7bmshd779f247bcd3562p1b66eajsn88d4cb9facc4',
        'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
      }
    })
    .then(response => response.json())
    .then((data) => {
      setshowdetail(data.show);
      setgenres(data.show.genres);
      setsource(data.show.sources);
      setseasonsdata(data.seasons);
    });
  };

  return (
    <div className='flex flex-col items-center p-3'>
      <div>
        <img src={showdetail.backdrop_path} alt='pic' className="w-full" />
      </div>

      <div className='w-full flex flex-col md:flex-row justify-center items-start p-4'>
        <div className="w-full md:w-1/4">
          <img src={showdetail.poster_path} alt="pic" className="w-full h-auto" />
        </div>

        <div className="w-full md:w-3/4 flex flex-col text-white p-4">
          <h1 className="text-3xl font-bold mb-2">{showdetail.original_title}</h1>
          <h2 className="text-xl font-semibold mb-2">Rating: {showdetail.vote_average}</h2>
          <h2 className="text-gray-500 mb-4">{showdetail.first_aired}</h2>
          <div className="flex flex-wrap text-gray-400 mb-4">
            <h4 className="mr-2">Genres:</h4>
            {genres.map((d, index) => (
              <h4 key={index} className="mr-2">{d}</h4>
            ))}
          </div>
          <h5 className=' mb-4'>{showdetail.overview}</h5>

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
        {showdetail.youtube_trailer && (
          <iframe
            width="100%"
            height="415"
            src={`https://www.youtube.com/embed/${showdetail.youtube_trailer.split('=')[1]}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className="w-full">
        <h1 className="text-white p-4">Seasons</h1>
        <div className="overflow-hidden">
          <div className="flex flex-nowrap overflow-x-scroll">
            {seasonsdata.map((season, index) => (
              <div key={index} className="flex-shrink-0 mr-2 cursor-pointer ">
                <h2 className="text-white p-2">Season {season.season}</h2>
                <div className="flex flex-no-wrap overflow-x-auto">
                  {season.episodes.map((episode, idx) => (
                    <div key={idx} className="flex-shrink-0 w-48 mr-2 cursor-pointer transform transition-transform hover:scale-95">
                      <img src={episode.thumbnail_path} alt={episode.title} className="w-full h-auto" />
                      <h5 className="text-white">{`Episode ${episode.episode_number}: ${episode.title}`}</h5>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;

