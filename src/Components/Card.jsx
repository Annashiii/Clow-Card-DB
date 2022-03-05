import React from 'react';
import { Box, Text, Container } from '@chakra-ui/react';

export default function Card(movies) {

  return (
       <div className='info-card'>
         <Box borderColor='white' bg='white' bgboxShadow='base' borderWidth='2px' borderRadius='lg' overflow='hidden' height={{base: 650 , sm: 670, xl: 700}}>
           <Box>
          <img src={movies.img} />
           </Box>
           <Box>
           <Box as='h4' fontWeight='semibold'>
            <Text fontSize='xl'>{movies.title}</Text>
             <p>{movies.orignalTitle}</p>  
             <p>{movies.releaseDate}</p>
           </Box>
            <Box>            
                <Text>  
                   {movies.description}
                </Text>
            </Box>  
           </Box>
         </Box>
        </div>
  )
}