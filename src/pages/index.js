import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Hanna Taylor`, `UX Designer`, `Web Designer`]} />
    <section className="hero">
      <div className="hero-body section">
            <h1 className="title h1-fluid">
              Hanna Taylor
            </h1>
            <h1 className="subtitle h1-fluid">
              Web/UX/UI/Graphic Designer
            </h1>
      </div>
    </section>
    <section className="section" id="about">
        <h2 className="h2-fluid">About</h2>
        <ul>
          <li><span role="img" aria-label="map pin emoji">📍</span>Based in NYC</li>
          <li><span role="img" aria-label="girl on laptop emoji">👩🏻‍💻</span>Web Designer for Partnerships at Booking.com</li>
          <li><span role="img" aria-label="brain emoji">🧠</span>Dev Bootcamp Grad '16</li>
        </ul>
      
    </section>
    <section className="section" id="resume">
        <h2 className="h2-fluid" >Resume</h2>
        <p>Work in Progress</p>
        <p>Meanwhile, find me on
        <a href="https://www.linkedin.com/in/hannataylor" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i>LinkedIn</a></p>
    </section>
    <section className="section" id="contact">
        <h2 className="h2-fluid">Contact</h2>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/hannataylor" target="_blank" rel="noopener noreferrer"><span className="icon"><i className="fab fa-linkedin-in"></i></span>Connect on LinkedIn</a>
          </li>
        </ul>
    </section>
  </Layout>
)

export default IndexPage
