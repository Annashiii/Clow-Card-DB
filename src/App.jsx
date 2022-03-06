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
  try {
     const response = await fetch('https://ghibliapi.herokuapp.com/films');
  if (!response.ok) {
    throw new Error(
      `This is an HTTP error: The status is ${response.status}`
    );
  }
    const data = await response.json();
    setMovies(data);
    setError(null);
  } catch(err) {
    setError(err.message);
    setMovies(null);
  } finally {
    setLoading(false);
  }
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
      <Box bg='#a5a58d' display='flex' alignItems='center' justifyContent='center' pt='40px' pb='30px'>
        <Box>
      <Text fontSize={47} fontFamily='Hubballi' letterSpacing='7px' > GHIBLI BASE </Text>
        <Text textAlign='center'> スタジオジブリ </Text>
        </Box>
      </Box>
      <Center w='100%'>
        <Box pt='80px' pb='20px' pl='40px' pr='40px'>
          <SimpleGrid columns={{sm: 2, md: 3, lg: 4, xl: 5}} spacingX='15px' spacingY='40px'>
             {cardEl}
          </SimpleGrid>
        </Box>
      </Center>
      <Box bg='#ddbea9' w='100%' pb='40px'>
        <Center pt='25px' color='white'>
          <Text fontFamily='League Spartan'> Made by HuniDev </Text>
        </Center>
        </Box>
    </main>
  );
}

export default App; 