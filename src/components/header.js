import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar container" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="link navbar-item navbar-logo">{ siteTitle }</Link>
      </div>
      <div className="navbar-start">
        <Link to="/about" className="link navbar-item">About</Link>
        <Link to="/resume" className="link navbar-item">Resume</Link>
        <Link to="/contact" className="link navbar-item">Contact</Link>
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
