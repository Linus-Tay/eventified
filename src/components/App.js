import React from 'react'
import Signup from './Signup';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/eventified" exact element={<Signup/>} />
      <Route path="/eventified/signup" exact element={<Signup/>} />
    </Routes>
  )
}

export default App;
