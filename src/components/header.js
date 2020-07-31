import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar container" id="top" role="navigation" aria-label="Header navigation">
      <div className="navbar-brand is-hidden-mobile">
        <Link to="/#top" className="link navbar-item navbar-logo">{ siteTitle }</Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-brand is-hidden-tablet">
          <Link to="/#top" className="link navbar-item">HT</Link>
        </div>
        <Link to="/#about" className="link navbar-item">About</Link>
        <Link to="/#resume" className="link navbar-item">Resume</Link>
        <Link to="/#contact" className="link navbar-item">Contact</Link>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
