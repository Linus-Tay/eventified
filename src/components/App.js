import React from 'react'
import Signup from './Signup';
import Home from './Home'
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  )
}

export default App;
