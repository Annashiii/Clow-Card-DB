import React from 'react';

export default function Card(movies) {

  return (
       <div className='info-card'>
          <img src={movies.img} />
          <h1>{movies.title}</h1>
          <p>{movies.description}</p>
         <p>{movies.orignaltitle}</p>          
         <p>{movies.releasedate}</p>
          <p>{movies.producer}</p>
        </div>
  )
}