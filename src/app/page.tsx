import Image from "next/image";
import TrendingMovies from '../Components/trendingmovies'
import TrendingShows from '../Components/Trendingshows'
import NewMovies from '../Components/newmovies'
import NewShows from '../Components/newshows'
import BestAnimated from '../Components/BestAnimated'
import SciFi from '../Components/SCIFI'
import FamilyTime from '../Components/Familytime'
import Adrenaline from '../Components/adrenaline'
import HeaderBanner from '../Components/HeaderBanner'
import WatchFree from '../Components/Watchfree'

export default function Home() {
  return (
    <div>
      <HeaderBanner />
      <TrendingMovies />
      <NewMovies />
      <TrendingShows />
      <NewShows />
      <BestAnimated />
      <SciFi />
      <FamilyTime />
      <Adrenaline />
      <WatchFree />
    </div>
  );
}
