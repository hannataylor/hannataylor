import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Hanna Taylor`, `UX Designer`, `Web Designer`, `UI Designer`, `NYC`]} />
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
          <li><span role="img" aria-label="Location (map pin emoji)">📍</span>Based in NYC</li>
          <li><span role="img" aria-label="Current Role (woman using laptop emoji)">👩🏻‍💻</span>Senior Design Lead for Partnerships at Klook</li>
          <li><span role="img" aria-label="Coding Education (brain emoji)">🧠</span>Dev Bootcamp - Full Stack Web Development Immersive - 2016</li>
          <li><span role="img" aria-label="Higher Education (stack of books emoji)">📚</span>Bachelor of Science - Major in Business, Minor in Psychology - 2013</li>
          <li><span role="img" aria-label="Fun Fact (map emoji)">🗺</span>Traveled to 34 countries (so far)</li>
        </ul>
      
    </section>
    <section className="section" id="resume">
        <h2 className="h2-fluid">Resume</h2>
        <h3 className="h3-fluid">Klook</h3>
        <h4 className="h4-fluid">Senior Design Lead, Partnerships and Affiliates</h4>
        <p className="dates">January 2020 - Present</p>

        <h3 className="h3-fluid">Booking.com</h3>
        <h4 className="h4-fluid">Web Designer, Strategic Partnerships</h4>
        <p className="dates">September 2016 - January 2020</p>
    </section>
    <section className="section" id="projects">
        <h2 className="h2-fluid">Projects</h2>
        <h3 className="h3-fluid"><a href="https://petplantguide.com" target="_blank" rel="noreferrer">PetPlantGuide.com</a> <span className="construction">(Under Construction)</span></h3>
        
        <h4 className="h4-fluid">A resource for finding pet friendly plants that utilizes the Amazon Associates affiliate program.</h4>
        <p className="dates">August 2020</p>


        <h3 className="h3-fluid"><a href="https://simple-site-template.now.sh/about" target="_blank" rel="noreferrer">Simple Gatsby Boilerplate</a></h3>
        <h4 className="h4-fluid">A simple responsive boilerplate template utilizing Gatsby</h4>
        <p className="dates">January 2020</p>

        <h3 className="h3-fluid"><a href="https://hannataylor.github.io/musicfestival/" target="_blank" rel="noreferrer">Lauterbrunnen Music Festival</a></h3>
        <h4 className="h4-fluid">A mock music festival website</h4>
        <p className="dates">July 2016</p>

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
