 import React from 'react'
 
 const MovieCardModal = ({ movie, onRemove }) => {
   return (
     <div key={movie.id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
       <img
                  src={movie.image}
                  alt={movie.nombre}
                  className="w-24 h-32 object-cover rounded-md mr-4"
                />

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{movie.nombre}</h3>
                  <p className="text-gray-500 text-sm mt-1">{movie.genero}</p>
                </div>

                {/* Botón eliminar */}
                <button
                  onClick={() => onRemove(movie.id)}
                  className="text-red-500 hover:text-red-700 text-xl ml-4 transition"
                >
                  ❌
                </button>
     </div>
   )
 }
 
 export default MovieCardModal
 
 
 
 