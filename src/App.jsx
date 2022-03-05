 import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './Components/Card.jsx';
import {Center, Box, SimpleGrid, Text} from '@chakra-ui/react'
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
      <Box bg='#B6B4C2' display='flex' alignItems='center' justifyContent='center' pt='50px' pb='30px'>
      <Text fontSize={37} fontFamily='League Spartan' > Ghibli Database </Text>
      </Box>
      <Center w='100%'>
        <Box pt='80px' pb='20px' pl='40px' pr='40px'>
          <SimpleGrid columns={{sm: 2, md: 3, lg: 4, xl: 5}} spacingX='15px' spacingY='40px'>
             {cardEl}
          </SimpleGrid>
        </Box>
      </Center>
    </main>
  );
}

export default App; 