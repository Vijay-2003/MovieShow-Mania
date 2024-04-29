"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AllMoviesHome() {
  const [indata, setdata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [searchTerm, setSearchTerm] = useState(''); // State to store search term
  const router = useRouter();

  useEffect(() => {
    // Fetch data for the current page when currentPage changes
    fetchMovies();
  }, [currentPage]); // Fetch data whenever currentPage changes

  useEffect(() => {
    // Filter data when search term changes
    const filteredMovies = indata.filter(movie =>
      movie.original_title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredMovies);
  }, [searchTerm, indata]); // Re-filter data whenever searchTerm or indata changes

  const fetchMovies = () => {
    fetch(`https://movies-api14.p.rapidapi.com/movies?page=${currentPage}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3b1a4fac7bmshd779f247bcd3562p1b66eajsn88d4cb9facc4',
        'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Fetched data:", data);
        setdata(data.movies);
        // Initialize filtered data with all movies initially
        setFilteredData(data.movies);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  const handledetail = (id) => {
    router.push(`/MovieDetail/${id}`);
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div >
      <div className="flex justify-center items-center gap-4 p-4">
        {currentPage > 1 && (
          <button
            className="text-gray-300 p-2 border-2 border-gray-200 rounded-xl transition-colors hover:text-white"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous Page
          </button>
        )}
        <button
          className=" text-gray-300 p-2 border-2 border-gray-200 rounded-xl transition-colors hover:text-white"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next Page
        </button>
      </div>

      {/* <div className=" flex py-2 justify-center items-center mb-2">
        <input
        className=" p-2 border-b-2 "
          type="text"
          placeholder="Search A Movie..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div> */}

      <div className="flex flex-wrap gap-3 justify-center items-center">
        {filteredData.map(data => (
          <div
            key={data._id}
            onClick={() => handledetail(data._id)}
            className="cursor-pointer transform transition-transform hover:scale-110"
          >
            <Image src={data.poster_path} height={50} width={240} alt="Pic" />
          </div>
        ))}
      </div>
    </div>
  );
}
