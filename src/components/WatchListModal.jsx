import React from 'react'
import MovieCardModal from './MovieCardModal';

const WatchListModal = ({IsmodalOpen, setIsmodalOpen, Watchlist, setWatchlist}) => {
  const modal=()=> setIsmodalOpen(!IsmodalOpen);

  const onRemove = (id)=> 
  {
    const updatedList = Watchlist.filter((m) => m.id !== id);
    setWatchlist(updatedList);
  }
  return (
    <>
    {
      IsmodalOpen ?
      <>
         <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
  <div className="bg-white text-black rounded-xl p-6 w-96 max-h-[80vh] overflow-y-auto">
    <h2 className="text-xl font-semibold mb-4">Mi Watchlist</h2>

    <div className="grid grid-cols-1 gap-6">
      {Watchlist.map((movie) => (
        <MovieCardModal key={movie.id} movie={movie} onRemove={onRemove} />
      ))}
    </div>

    <button
      onClick={modal}
      className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 m-2"
    >
      cerrar
    </button>
  </div>
</div>
      </>
        :
      <>
       
      </>

    }
    </>

  );

  
}

export default WatchListModal
