import React from 'react'
import Signup from './Signup';
import Dashboard from './Dashboard'
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/forgotpassword" element={<ForgotPassword/>} />
      <Route path="/updateprofile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>} />
    </Routes>
  )
}

export default App;
