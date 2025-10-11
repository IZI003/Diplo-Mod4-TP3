
const Headers = ({setIsmodalOpen, IsmodalOpen}) => {

    const openmodal= ()=> setIsmodalOpen(!IsmodalOpen);
  return (
    <div>
      <button onClick={openmodal}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 ">
            🎥 Ver Watchlist
      </button>
    </div>
  )
}

 export default Headers;