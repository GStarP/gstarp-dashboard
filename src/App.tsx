import React from 'react'
import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Main from './pages/Main/Main'
import About from './pages/About/About'
import MButton from '@mui/material/Button'

function App() {
  const nav = useNavigate()
  return (
    <div className="app">
      <h1>APP</h1>
      <div>
        <MButton
          variant="contained"
          onClick={() => {
            nav('/')
          }}
        >
          To Main
        </MButton>
        <Link to="/about">To About</Link>
      </div>
      <Routes>
        <Route index element={<Main />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App
