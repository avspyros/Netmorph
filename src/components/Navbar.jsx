import AnchorLink from "react-anchor-link-smooth-scroll"
import { useState } from 'react'

export default function Navbar() {

  const navItems = [
    { id: 1, title: 'welcome', href: "#welcome" },
    { id: 2, title: 'profile', href: "#profile" },
    { id: 3, title: 'samples', href: "#samples" },
    { id: 4, title: 'get in touch', href: "#contact" }
  ]

  const [navigation, setNavigation] = useState(navItems)
  const [activeSection, setActiveSection] = useState(navItems[0])

  console.log(activeSection);

  return (
    <div className="nav-wrapper" id="sidebar">
      <div className="nav-inner">
        <nav>
          <ul>
            {navigation.map(navItem => (
              <li key={navItem.id}>
                <AnchorLink
                  href={navItem.href}
                  className={`nav-link ${navItem === activeSection ? "active" : ""}`}
                  onClick={() => setActiveSection(navItem)}>
                  {navItem.title}
                </AnchorLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}