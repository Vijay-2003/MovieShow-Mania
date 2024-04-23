"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AllMoviesHome() {
  const [indata, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const router = useRouter();

  useEffect(() => {
    // Fetch data for the current page when currentPage changes
    fetchMovies();
  }, [currentPage]); // Fetch data whenever currentPage changes

  const fetchMovies = () => {
    fetch(`https://movies-api14.p.rapidapi.com/movies?page=${currentPage}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8bdce9a8cemshd13478060ca5e16p1de2c8jsn3cf75b553f3c',
        'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Fetched data:", data);
        setdata(data.movies);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  const handledetail = (id) => {
    router.push(`/MovieDetail/${id}`);
  }

  return (
    <div className=" bg-red-600">
 <div className=" flex justify-center items-center gap-4 p-4">
 {
        currentPage > 1
        &&
        <button className=" p-2 border-2 border-gray-200 rounded-xl" 
        onClick={() => setCurrentPage(currentPage - 1)}>Previous Page</button>
      }
      <button className=" p-2 border-2 border-gray-200 rounded-xl" 
      onClick={() => setCurrentPage(currentPage + 1)}>Next Page</button>
 </div>

      <div className=" flex flex-wrap gap-3 justify-center items-center">
      {indata.map(data => (
        <div key={data._id} onClick={() => handledetail(data._id)} className=" cursor-pointer">
          <Image src={data.poster_path} height={80} width={230} alt="Pic" />
        </div>
      ))}
      </div>
    </div>
  );
}
