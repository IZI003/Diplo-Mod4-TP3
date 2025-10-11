import React, { useEffect, useState } from 'react'
import WatchListModal from '../components/WatchListModal'
import Headers from '../components/Headers'
import MovieList from '../components/MovieList';

const Home = () => {
  const [IsmodalOpen, setIsmodalOpen] = useState(false);
  const [Watchlist, setWatchlist] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  
    // Cargar desde localStorage al iniciar
  useEffect(() => {
    const storedList = localStorage.getItem('watchlist');
    if (storedList) {
        setWatchlist(JSON.parse(storedList));
    }
    setIsLoaded(true); // marcamos que ya se cargó
  }, []);

  // Guardar en localStorage solo después de cargar
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('watchlist', JSON.stringify(Watchlist));
    }
  }, [Watchlist, isLoaded]);

  return (
    <>
    <Headers 
      setIsmodalOpen={setIsmodalOpen}
      IsmodalOpen={IsmodalOpen}
      />
      <MovieList
      setIsmodalOpen={setIsmodalOpen}
      setWatchlist={setWatchlist}
      Watchlist={Watchlist}
      />
    <WatchListModal 
    IsmodalOpen={IsmodalOpen}
    setIsmodalOpen={setIsmodalOpen}
     setWatchlist={setWatchlist}
      Watchlist={Watchlist}
    />
    </>
  )
}
export default Home;