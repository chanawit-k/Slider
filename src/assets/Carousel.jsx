import React from 'react'
import { BiSolidQuoteLeft } from 'react-icons/bi'
const Carousel = ({ person }) => {
  const { image, name, title, quote } = person

  return (
    <div className="slide">
      <img src={image} alt="" className="person-img" />
      <h4 className="name">{name}</h4>
      <h4 className="title">{title}</h4>
      <p className="text">{quote}</p>
      <div className="icon">
        <BiSolidQuoteLeft />
      </div>
    </div>
  )
}
export default Carousel
