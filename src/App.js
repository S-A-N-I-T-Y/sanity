import './App.css';
import { useState, useEffect } from 'react';
import Moviecard from './MovieCard';


const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=6dd16983 ";
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }
  useEffect(() => {
    searchMovies("hola")
  },[])


  return (
    <div className="app">
      <h1>Sanity</h1>

      <div className="search">
        <input
          type="text"
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> 

        <img
          src="{SearchIcon}"
          alt="Search"
          onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        movies?.length > 0 ? (
          <div className="container">
            {
              movies.map((movie) => {
                return <Moviecard movie={movie} />
              })
            };
          </div>
        ) :
          (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      };
    </div>
  );
}

export default App;