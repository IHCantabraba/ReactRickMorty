import React from 'react'

const Btn = (props) => {
  return (
    <button className='btn btn-primary btn-sm ' onClick={props.funcion}>
      Page {props.page - 1}
    </button>
  )
}

export default Btn
