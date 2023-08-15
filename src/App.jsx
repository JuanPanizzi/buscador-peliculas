import { useEffect, useRef, useState } from 'react'
import { Formulario } from './componentes/Formulario'
import { Peliculas } from './componentes/Peliculas'
import { usePelis } from './hooks/usePelis'
import './App.css'


function App() {

  const{resultadosPeliculas, busqueda, errorBusqueda, erorrFetch, handleChange, handleSubmit }= usePelis()
  return (
    <>
    <header>
      <Formulario handleChange={handleChange} handleSubmit={handleSubmit}/>
    </header>
    <main>
    {errorBusqueda && <h2>{errorBusqueda}</h2>}

      <div className='ctn-movies'>

      {
       !erorrFetch && resultadosPeliculas.length > 0 && resultadosPeliculas.map(({Title, imdbID, Year, Poster}, index)=>(
         <Peliculas Title={Title} 
         imdbID={imdbID} 
         Year={Year} 
         Poster={Poster} 
         key={`${index}-${imdbID}`}/>
))
}
{
  erorrFetch && <h1>No se encontraron resultados</h1>
}
    </div>
    </main>
    </>
  )
}

export default App
