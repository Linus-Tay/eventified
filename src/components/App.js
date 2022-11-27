import React from 'react'
import Signup from './Signup';
import Home from './Home'
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/signup" exact element={<Signup/>} />
    </Routes>
  )
}

export default App;
