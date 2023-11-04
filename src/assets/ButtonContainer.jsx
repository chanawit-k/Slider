import React from 'react'
import { FcNext, FcPrevious } from 'react-icons/fc'
const ButtonContainer = ({ person, toggleNext, togglePrev }) => {
  return (
    <div>
      <button
        type="button"
        className="prev"
        onClick={() => {
          togglePrev(person.id)
        }}
      >
        <FcPrevious />
      </button>
      <button
        type="button"
        className="next"
        onClick={() => {
          toggleNext(person.id)
        }}
      >
        <FcNext />
      </button>
    </div>
  )
}

export default ButtonContainer
