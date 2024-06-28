import Character from '../character/character'
import NavPage from '../page/page'
import './Characters.css'
import React, { useState, useEffect } from 'react'

const Characters = () => {
  /* hook para los personajes inicializado en un array vacio */
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)

  /* cargar los datos al arrancar la app */
  useEffect(() => {
    const getCharacters = async () => {
      const personajes = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      )
      const personajesJSON = await personajes.json()
      setCharacters(personajesJSON.results)
    }
    getCharacters()
  }, [page])
  return (
    <div className='container bg-dark text-white'>
      <NavPage page={page} setPage={setPage} />
      <div className='row'>
        {characters.map((character) => (
          <div className='col-md-4' key={character.id}>
            <Character character={character} />
          </div>
        ))}
        <NavPage page={page} setPage={setPage} />
      </div>
    </div>
  )
}

export default Characters
