import React from 'react';
import { Box, Text, Container } from '@chakra-ui/react';

export default function Card(movies) {

  return (
       <div className='info-card'>
         <Box borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <img src={movies.img} />
           <Box>
           <Box as='h4' fontWeight='semibold'>
            <Text fontSize='xl'>{movies.title}</Text>
             <p>{movies.orignalTitle}</p>  
             <p>{movies.releaseDate}</p>
           </Box>
            <Box>            
                <p className='truncate'>    
                   {movies.description}
                </p>
            </Box>  
           </Box>
         </Box>
        </div>
  )
}