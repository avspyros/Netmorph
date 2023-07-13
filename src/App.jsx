import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.scss'

// COMPONENTS
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Profile from './components/Profile'
// import Content from './components/Content'


function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="content-wrapper">
        <Welcome />
        <Profile />

      </div>
      <footer></footer>
    </div>
  )
}

export default App
