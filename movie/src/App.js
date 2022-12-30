
import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';

function App() {
  const api ="https://api.themoviedb.org/3/movie/popular?api_key=a2c742d9be4b7668fe4be70f4a0b6cc6"
  const api_search ="https://api.themoviedb.org/3/search/movie?api_key=a2c742d9be4b7668fe4be70f4a0b6cc6&query="
  const [movies,setMovies] = useState([])
  const [term, setTerm] = useState('')

  useEffect(() =>{
    fetch(api)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  },[])

console.log(movies)

const handleSearch = (e) =>{
  e.preventDefault()
  fetch(api_search + term)
    .then(res => res.json())
    .then(data => setMovies(data.results))
}

  return (
    <div className="App">
      <div className='search_nav'>
        <div>
          <h1>Movies</h1>
        </div>
        <div>
          <form onSubmit={handleSearch}>
            <input onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
          </form>
        </div>
      </div>

      <div className='movies'>
        {movies.map((movie) =>(
            <MovieCard {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
