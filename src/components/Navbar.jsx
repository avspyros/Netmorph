import AnchorLink from "react-anchor-link-smooth-scroll"
import { useState } from 'react'

export default function Navbar() {

  const navLinks = [
    { id: 1, href: "#welcome", txt: "welcome", isActive: false },
    { id: 2, href: "#profile", txt: "profile", isActive: false },
    { id: 3, href: "#samples", txt: "samples", isActive: false },
    { id: 4, href: "#contact", txt: "get in touch", isActive: false }
  ]

  const [activeLink, setActiveLink] = useState()

  return (
    <div className="nav-wrapper" id="sidebar">
      <div className="nav-inner">
        <nav>
          <ul>
            {
              navLinks.map(navLink => {
                return (
                  <li key={navLink.id}>
                    <AnchorLink
                      href={navLink.href}
                      className={`nav-link ${activeLink === navLink.id ? "active" : ""}`}
                      onClick={() => setActiveLink(navLink.id)}>
                      {navLink.txt}
                    </AnchorLink>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}