
import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';

function App() {
  const api ="https://api.themoviedb.org/3/movie/popular?api_key=a2c742d9be4b7668fe4be70f4a0b6cc6"
  const [movies,setMovies] = useState([])

  useEffect(() =>{
    fetch(api)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  },[])

console.log(movies)

  return (
    <div className="App">
      <div className='search_nav'>
        <div>
          <h1>Movies</h1>
        </div>
        <div>
          <form>
            <input />
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
