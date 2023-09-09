import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import { Dashboard } from './components/page/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
  <Routes>  
    <Route path="/" element={ <Dashboard />} />       
   </Routes>
    
    </>
  )
}

export default App
