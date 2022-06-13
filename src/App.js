import React from 'react'
import './App.css'
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './Component/About/About'
import Update from './Component/Update/Update'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/update:id" element={<Update />} />
      </Routes>
    </>
  )
}

export default App
