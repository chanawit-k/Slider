import React, { useEffect, useState } from 'react'
import { BiSolidQuoteLeft } from 'react-icons/bi'
import { list } from './data'
import { FcNext, FcPrevious } from 'react-icons/fc'
const Carousel = () => {
  const [people, setPeople] = useState(list)
  const [currentPerson, setCurrentPerson] = useState(0)

  const toggleNext = () => {
    const nextIndex = (currentPerson + 1) % 4
    setCurrentPerson(nextIndex)
  }

  const togglePrev = () => {
    const prevIndex = (currentPerson - 1) % 4
    setCurrentPerson(prevIndex)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      toggleNext()
    }, 2000)
    return () => {
      clearInterval(intervalId)
    }
  }, [currentPerson])
  return (
    <div className="slide">
      {people.map((person, personIndex) => {
        const { image, name, title, quote } = person
        return (
          <div
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
            }}
          >
            <img src={image} alt="" className="person-img" />
            <h4 className="name">{name}</h4>
            <h4 className="title">{title}</h4>
            <p className="text">{quote}</p>
            <BiSolidQuoteLeft className="icon" />
          </div>
        )
      })}
      <button type="button" className="prev" onClick={togglePrev}>
        <FcPrevious />
      </button>
      <button type="button" className="next" onClick={toggleNext}>
        <FcNext />
      </button>
    </div>
  )
}
export default Carousel
