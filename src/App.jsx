 import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './Components/Card.jsx';
import {Center, Box, SimpleGrid, Heading} from '@chakra-ui/react'
import {createBreakpoints} from '@chakra-ui/theme-tools';



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
      <Box display='flex' alignItems='center' justifyContent='center' mt='50px'>
      <Heading size='xl' className='title'> Ghibli Database </Heading>
      </Box>
        <Box mt='80px' mb='20px' ml='40px' mr='40px'>
          <SimpleGrid columns={[2, 3, 5]} spacingX='15px' spacingY='20px'>
             {cardEl}
          </SimpleGrid>
        </Box>
    </main>
  );
}

export default App; 