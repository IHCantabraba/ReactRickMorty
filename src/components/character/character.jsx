import React, { useState } from 'react'
import './character.css'
function Character({ character }) {
  const [rotate, setRotation] = useState(false)

  return (
    <>
      <div className='container text-center p-5'>
        <h4 key={character.name}>{character.name}</h4>
        <img
          src={character.image}
          alt={character.name}
          className={rotate ? 'rotate-180 rounded-pill' : 'rounded-pill'}
          onClick={() => setRotation(!rotate)}
        ></img>

        <p>{character.origin.name}</p>
      </div>
    </>
  )
}

export default Character
