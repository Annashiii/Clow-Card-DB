import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './Components/Card.jsx';


function App() {
  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(async () => {
  const response = await fetch('https://ghibliapi.herokuapp.com/films');
  const data = await response.json();
  setMovies(data);
}, []);

  const cardEl = movies.map(movie => {
    return (
      <Card
             id={movie.id}
             img={movie.image}
             title={movie.title}
             originaltitle={movie.original_title}
             description={movie.description}
             releasedate={movie.release_date}
             producer={movie.producer}
        />
     )     
  })
  return (
    <main>
      <div className="container">
        <h1 className="title"> Ghibli Database </h1>
        {cardEl}
      </div>
    </main>
  );
}

export default App; 