"use client"
// import { pages } from "next/dist/build/templates/app-page";
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
        'X-RapidAPI-Key': '770c9e5ebdmsh5132a481cc431fep18f7a3jsn5bb845ba0219',
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
     <button onClick={() => setCurrentPage(currentPage + 1)}>Next Page</button>
      {/* Add more buttons for additional pages if needed */}
      {indata.map(data => (
        <div key={data._id}>
          <p>{data.original_title}</p>
          <Image src={data.poster_path} height={80} width={80} alt="Pic" />
          <button onClick={() => handledetail(data._id)}>Details</button>
        </div>
      ))}
    </div>
  );
}
