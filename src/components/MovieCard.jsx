// src/components/MovieCard.tsx
import React from "react";

const MovieCard = ({ movie, addtowatchlist }) => {

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 cursor-pointer">
      <img
        src={movie.image}
        alt={movie.nombre}
        className="w-full h-64 object-cover"
      />
      <div className="p-4" key={movie.id}>
        <h3 className="text-lg font-semibold text-gray-800">{movie.nombre}</h3>
        <p className="text-gray-500 text-sm mt-1">{movie.genero}</p>

          <button
            onClick={() => addtowatchlist(movie)}
            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 "
          >
            add Watchlist
          </button>
      </div>
    </div>
  );
};

export default MovieCard;
