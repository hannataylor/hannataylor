import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav class="navbar level" role="navigation" aria-label="main navigation">
      <p class="level-item has-text-centered">
        <Link to="/" class="link is-info">Home</Link>
      </p>
      <p class="level-item has-text-centered">
      <Link to="/typography" class="link is-info">Typography</Link>
      </p>
      <p class="level-item has-text-centered">
        <Link to="/" class="link is-info">{siteTitle}</Link>
      </p>
      <p class="level-item has-text-centered">
      <Link to="/resume" class="link is-info">Resume</Link>
      </p>
      <p class="level-item has-text-centered">
      <Link to="/contact" class="link is-info">Contact</Link>
      </p>
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
