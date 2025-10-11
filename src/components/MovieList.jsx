import React from 'react'
import MovieCard from './MovieCard';
import movies from '../api/movies.json';
const MovieList = ({setWatchlist,Watchlist, setIsmodalOpen}) => {

  const addtowatchlist = (movie) => {
    if (!Array.isArray(Watchlist)) {
      console.error("❌ Watchlist no es un array:", Watchlist);
      return;
    }

    const exists = Watchlist.some((m) => m.id === movie.id);
    if (!exists) {
      setWatchlist([...Watchlist, movie]);
      setIsmodalOpen(true);


    }
  };

  return (
    <>
     <div className="p-6">
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          gap-6
        "
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id}
           movie={movie}
           addtowatchlist= {addtowatchlist} 
           />
        ))}
      </div>
    </div>
    </>
  )
}

export default MovieList
