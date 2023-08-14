import React from 'react'

export const Peliculas = ({Title, Year, Poster ,imdbID}) => {
  return (
  <>
  <div key={imdbID} className='ctn-images' >
            
    <div className='ctn-images-head'>
    <p>{Title}</p>
    <p>{Year}</p>
    </div>
    <div className='ctn-images-body'>
    <img src={Poster} alt={Title} />
    </div>
  </div>
  </>
  )
}
