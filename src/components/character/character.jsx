import React, { useState } from 'react'
import './character.css'
function Character({ character }) {
  const [rotate, setRotation] = useState(false)

  return (
    <>
      <div className='container text-center p-5'>
        <button
          className='char-btn'
          id={character.id}
          onClick={() => {
            setRotation(!rotate)
          }}
        ></button>
        <h4 key={character.name}>{character.name}</h4>
        {rotate ? (
          <img
            src={character.image}
            alt={character.name}
            className='rotate-180 rounded-pill'
          ></img>
        ) : (
          <img
            src={character.image}
            alt={character.name}
            className='rounded-pill'
          ></img>
        )}
        <p>{character.origin.name}</p>
      </div>
    </>
  )
}

export default Character
