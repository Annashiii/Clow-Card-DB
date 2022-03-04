import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './Components/Card.jsx';
import { Grid, GridItem, Center, Box} from '@chakra-ui/react'



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
             originalTitle={movie.original_title}
             description={movie.description}
             releaseDate={movie.release_date}
             producer={movie.producer}
        />
     )     
  })
  return (
    <main>
      <h1 className="title"> Ghibli Database </h1>
      <Box width="100%">
      <Center>
        <Grid templateColumns='repeat(6, 1fr)' gap={10}>
               {cardEl}
        </Grid>
      </Center>
      </Box>
    </main>
  );
}

export default App; 