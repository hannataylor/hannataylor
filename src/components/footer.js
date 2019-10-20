import React from "react"


const Footer = () => (
    <footer className="footer is-flex">
        <div className="social-icons is-flex">
            <a className="icon" href="https://github.com/hannataylor" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a className="icon" href="https://www.linkedin.com/in/hannataylor" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>
        <div className="content copyright">
            <p>Copyright © {new Date().getFullYear()}</p>
            <p>Designed by Hanna Taylor</p>
        </div>
    </footer>
  )

export default Footer