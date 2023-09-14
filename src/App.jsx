import { useState } from 'react'
import React from 'react'
import './App.scss'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/netflix-clone/' element={<Home/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
