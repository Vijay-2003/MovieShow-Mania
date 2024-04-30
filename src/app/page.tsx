"use client"
import TrendingMovies from '../Components/trendingmovies'
import TrendingShows from '../Components/Trendingshows'
import NewMovies from '../Components/newmovies'
import NewShows from '../Components/newshows'
import BestAnimated from '../Components/BestAnimated'
import SciFi from '../Components/SCIFI'
import FamilyTime from '../Components/Familytime'
import Adrenaline from '../Components/adrenaline'
import ControlledCarousel from '../Components/HeaderBanner'
import WatchFree from '../Components/Watchfree'
import Documnentries from '../Components/Documentries'

export default function Home() {
  return (
    <div className=" p-2">
      <ControlledCarousel />
      <hr className=" text-gray-400" />
      <TrendingMovies />
      <hr className=" text-gray-400" />
      <NewMovies />
      <hr className=" text-gray-400" />
      <TrendingShows />
      <hr className=" text-gray-400" />
      <NewShows />
      <hr className=" text-gray-400" />
      <BestAnimated />
      <hr className=" text-gray-400" />
      <SciFi />
      <hr className=" text-gray-400" />
      <FamilyTime />
      <hr className=" text-gray-400" />
      <Adrenaline />
      <hr className=" text-gray-400" />
      <Documnentries />
      <hr className=" text-gray-400" />
      <WatchFree />
    </div>
  );
}
