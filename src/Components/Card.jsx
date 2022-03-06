import React from 'react';
import { Box, Text, Container } from '@chakra-ui/react';

export default function Card(movies) {

  return (
       <div className='info-card'>
         <Box borderColor='#FCF1F2' bg='white' bgboxShadow='base' borderWidth='2px' borderRadius='lg' overflow='hidden' height={{base: 650 , sm: 670, xl: 700}}>
           <Box>
          <img src={movies.img} />
           </Box>
           <Box>
           <Box as='h4' fontWeight='semibold'>
            <Text fontSize='xl'>{movies.title}</Text>
             <Text fontFamily='Noto Sans JP' color='gray.500'>      
                 {movies.originalTitle}
             </Text>  
             <p>{movies.releaseDate}</p>
           </Box>      
              <Text fontSize='md'fontSize='15px'  maxH={250} p={5} overflow='scroll' >  
                  {movies.description}
              </Text>
           </Box>
         </Box>
        </div>
  )
}