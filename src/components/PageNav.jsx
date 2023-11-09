import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function PageNav() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const projectLinks = [
    { id: 1, slug: 1, txt: "Text Switcher" },
    { id: 2, slug: 2, txt: "Imisi Collection" },
    { id: 3, slug: 3, txt: "Myhabeats" }
  ];

  return (
    <div className="pagenav-wrapper" id="pagenav">
      <div className="pagenav-inner">
        <nav>
          <div className='logo'>
            <NavLink to='/'>/ AvSpyros /</NavLink>
          </div>
          <div className='nav-items'>
            <NavLink to='/story'>Story</NavLink>
            <div className='dropdown-container'>
              <button className="dropdown" onClick={handleOpen}>
                SAMPLE PROJECTS <span>&#x2304;</span>
              </button>
              {open ? (
                <ul className="dropdown-menu">
                  {
                    projectLinks.map(projectLink => {
                      return (
                        <li key={projectLink.id}>
                          <NavLink to={`/project/${projectLink.slug}`}>{projectLink.txt}</NavLink>
                        </li>
                      );
                    })
                  }
                </ul>
              ) : null}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

