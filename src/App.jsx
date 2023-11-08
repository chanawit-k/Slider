import { useState } from 'react'
import { shortList, longList } from './data'
import Carousel from './assets/Carousel'
import ButtonContainer from './assets/ButtonContainer'

const App = () => {
  const [person, setPerson] = useState(shortList[0])
  const toggleNext = (id) => {
    // test
    const nextId = id + 1
    const newPerson = longList.filter((data) => nextId === data.id)[0]
    if (!newPerson) {
      setPerson(longList[0])
    } else {
      setPerson(newPerson)
    }
  }

  const togglePrev = (id) => {
    const prevId = id - 1
    const newPerson = longList.filter((data) => prevId === data.id)[0]
    if (!newPerson) {
      setPerson(longList[longList.length - 1])
    } else {
      setPerson(newPerson)
    }
  }

  return (
    <main>
      <section className="slider-container">
        <Carousel person={person} longList={longList} />
        <ButtonContainer
          toggleNext={toggleNext}
          togglePrev={togglePrev}
          person={person}
        />
      </section>
    </main>
  )
}
export default App
