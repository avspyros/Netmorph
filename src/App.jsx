// import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './app.scss'

// COMPONENTS
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Profile from './components/Profile'
import Samples from './components/Samples'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="content-wrapper">
        <Welcome />
        <Profile />
        <Samples />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
