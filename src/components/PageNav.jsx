import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function PageNav() {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="pagenav-wrapper" id="pagenav">
      <div className="pagenav-inner">
        <nav>
          <div className='logo'>
            <NavLink to='/'>AvSpyros</NavLink>
          </div>
          <div className='nav-items'>
            <NavLink to='/'>Story</NavLink>
            <div className='dropdown-container'>
              <button className="dropdown" onClick={handleOpen}>
                SAMPLE PROJECTS <span>&#x2304;</span>
              </button>
              {open ? (
                <ul className="dropdown-menu">
                  <li><NavLink to='Project'>Project 1</NavLink></li>
                  <li><NavLink to='Project'>Project 2</NavLink></li>
                  <li><NavLink to='Project'>Project 3</NavLink></li>
                </ul>
              ) : null}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

