import { useEffect, useRef, useState } from "react"

export function usePelis(){

    // const peliculas = resultados.Search
  
    const [busqueda, setBusqueda] = useState('')
    const [errorBusqueda, setErrorBusqueda] = useState('')
    const [erorrFetch, setErorrFetch] = useState(false)
    const [resultadosPeliculas, setResultadosPeliculas] = useState([])
  
    // const API_KEY = 'ca54c657'
    
    const url = `http://www.omdbapi.com/?apikey=ca54c657&s=${busqueda}`
  
    const isFirstInput = useRef(true)
  
    const handleSubmit = (e) =>{
      e.preventDefault()
      getMovies()
  
    }
    const handleChange = (e)=>{
      setBusqueda(e.target.value)
  
    }
    const getMovies = async ()=>{
  
      try {
          let response = await fetch(url) 
  
          
          let json = await response.json()
  
          if(json.Response == 'True'){
  
            console.log('todo bien')
            setResultadosPeliculas(json.Search)
            setErorrFetch(false)
          }else{
            setErorrFetch(true)
            throw new Error('Error al buscar las peliculas')
          }
  
        } catch (error) {
        console.log(error)
      }
    }
  
  useEffect(() => {
    
    if (isFirstInput.current) {
      isFirstInput.current = busqueda === ''
      return
    }
    
    if (busqueda === '') {
      setErrorBusqueda('No se puede buscar una película vacía')
      return
    }
    if(busqueda.length < 3){
      setErrorBusqueda('No se puede buscar una peli menor a 3 caracteres')
      return
    }
    setErrorBusqueda(null)
    
  
  }, [busqueda])
  return{
    busqueda, errorBusqueda, erorrFetch,resultadosPeliculas, handleChange, handleSubmit, getMovies
  }

}