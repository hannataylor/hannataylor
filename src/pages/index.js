import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Hanna Taylor`, `UX Designer`, `Web Designer`]} />
    <section className="hero">
      <div className="hero-body section">
            <h1 className="title is-1 h1-fluid">
              Hi, I'm Hanna Taylor.
            </h1>
            <h1 className="subtitle is-1 h1-fluid">
              I'm a Web/UX/UI/Graphic Designer based in New York City with 3+ years of experience.
            </h1>
      </div>
    </section>
    <section className="section" id="about">
        <h2 className="is-2 h2-fluid">About</h2>
        <p>Content Here</p>
        <p>Content Here</p>
        <p>Content Here</p>
        <p>Content Here</p>
      
    </section>
    <section className="section" id="resume">
        <h2 className="is-2 h2-fluid" >Resume</h2>
        <p>Content Here</p>
        <p>Content Here</p>
        <p>Content Here</p>
        <p>Content Here</p>
        <p>Content Here</p>

    </section>
    <section className="section" id="contact">
        <h2 className="is-2 h2-fluid">Contact</h2>
        <p>Content Here</p>
        <p>Content Here</p>
        <p>Content Here</p>
        <p>Content Here</p>
        <p>Content Here</p>
        <p>Content Here</p>
    </section>
  </Layout>
)

export default IndexPage
