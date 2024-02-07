import { useState } from 'react'
import Navbar from './components/Navbar'
import Suitable from './components/Suitable'
import Certified from './components/Certified'
import Secret from './components/Secret'
import Curated from './components/Curated'
import Makeproduct from './components/Makeproduct'
import Bottom from './components/Bottom'
function App() {
  return (
    <>
      <Navbar />
      <Suitable />
      <Certified />
      <Secret />
      <Curated />
      <Makeproduct />      
      <Bottom />
    </>
  )
}

export default App
