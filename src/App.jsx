import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './app.scss'

// PAGES
import Home from './pages/Home'
import Story from './pages/Story'
import Project from './pages/Project'
// import ProjectOne from './pages/ProjectOne'
// import ProjectTwo from './pages/ProjectTwo'
// import ProjectThree from './pages/ProjectThree'
import PageNotFound from './pages/PageNotFound'

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }

  return (
    <div className="app-wrapper">
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='story' element={<Story />} />
        <Route path='project/:projectId' element={<Project />} />
        {/* <Route index element={<Home />} /> */}
        {/* <Route path='1' element={<ProjectOne />} />
          <Route path='2' element={<ProjectTwo />} />
          <Route path='3' element={<ProjectThree />} /> */}
        {/* </Route> */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
