import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Router,Routes } from 'react-router-dom'
import Home from './Pages/home/Home'

function App() {
  

  return (
    
      <div className=" w-full">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    
  )
}

export default App
