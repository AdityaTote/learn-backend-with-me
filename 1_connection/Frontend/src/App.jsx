import React, { useState, useEffect } from 'react'; 
import axios from 'axios';  // axios is smae as fetch but here we no have to parde jsn format file.
import './App.css';


function App() {
  const [movies, setMovies] = useState( [] )  
  
  useEffect(() => {
    axios.get('/api/movies')         
    .then((res) => {
      setMovies(res.data)
    }).catch((error) => {
      console.log(error);
    });
  });

  return (
    <>
      <h1>Movies And Its Release Year</h1>
      <p>{movies.length}</p>
      {
        movies.map((movie) => (
            <div key={movie.id}>
              <h3>{movie.id} : {movie.name}</h3>
              <h3>{movie.releaseYear}</h3>
            </div>
        ))
      }
      
    </>
  )
}

export default App
