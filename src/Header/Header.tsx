// LOCAL IMPORTS
import './Header.scss'

const Header = () => {
  return (
    <main id="header">
      <div className="header-col-1">
        <img id="header-img" src="/static/pictekLogo.jpg" alt="Piktek Logo" />
      </div>
      <div className="header-col-2">
        <nav id="nav-bar">
          <ul>
            <a className="nav-link" href="#features">
              <li>Features</li>
            </a>
            <a className="nav-link" href="#pricing">
              <li>Pricing</li>
            </a>
            <a className="nav-link" href="#usage">
              <li>Usage</li>
            </a>
          </ul>
        </nav>
      </div>
    </main>
  )
}

export default Header
