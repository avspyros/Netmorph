import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.scss'

// COMPONENTS
import Navbar from './components/Navbar'
// import Container from './components/Container'
import Welcome from './components/Welcome'
import Profile from './components/Profile'
import Samples from './components/Samples'



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
