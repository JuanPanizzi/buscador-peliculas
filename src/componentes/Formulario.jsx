
export const Formulario = ({handleChange, handleSubmit}) => {
  return (
    <>
    <h1>¡Buscador de Películas!</h1>
      <form onSubmit={handleSubmit}>
      <label>
        <input type="text" onChange={handleChange} />
      </label>
        <button type='submit'>Buscar pelicula</button>
      </form>
    </>
  )
}
