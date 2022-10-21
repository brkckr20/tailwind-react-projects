import React from 'react'
import HeadLineCards from './components/HeadLineCards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadLineCards />
    </div>
  )
}

export default App