import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll"
import './app.scss'

// COMPONENTS
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Profile from './components/Profile'
import Samples from './components/Samples'

import { useState } from 'react'

function App() {

  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="content-wrapper">
        <Welcome />
        <Profile />
        <Samples />
      </div>
      <footer></footer>
    </div>
  )
}

export default App
