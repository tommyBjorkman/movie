
import { useState } from 'react';
import './App.css';

function App() {

  const [movies,setMovies] = useState([])

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

      </div>
    </div>
  );
}

export default App;
