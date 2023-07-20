import AnchorLink from "react-anchor-link-smooth-scroll"

export default function Navbar() {

  return (
    <div className="nav-wrapper" id="sidebar">
      <div className="nav-inner">
        <nav>
          <ul>
            <li><AnchorLink href="#welcome" className="nav-link">welcome</AnchorLink></li>
            <li><AnchorLink href="#profile" className="nav-link">profile</AnchorLink></li>
            <li><AnchorLink href="#samples" className="nav-link">samples</AnchorLink></li>
            <li><AnchorLink href="#" className="nav-link">get in touch</AnchorLink></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}