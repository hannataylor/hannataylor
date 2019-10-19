import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav class="navbar container" role="navigation" aria-label="main navigation">
      <div class="navbar-start">
        <Link to="/" className="link navbar-item navbar-logo">{ siteTitle }</Link>
      </div>
      <div class="navbar-end">
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
