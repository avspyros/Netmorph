import { Routes, Route } from 'react-router-dom'
import './app.scss'

// PAGES
import Home from './pages/Home'
import Story from './pages/Story'
import Project from './pages/Project'
import PageNotFound from './pages/PageNotFound'

function App() {

  return (
    <div className="app-wrapper">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='story' element={<Story />} />
        <Route path='project' element={<Project />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
