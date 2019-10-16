import React from "react"

const Footer = () => (
    <footer>
        <div class="container">
            <p class="copyright">© {new Date().getFullYear()} Designed and Developed by Hanna Taylor</p>
            <p>Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a></p>
        </div>
    </footer>
  )

export default Footer