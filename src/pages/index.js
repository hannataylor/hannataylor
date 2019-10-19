import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="hero">
      <div class="hero-body level has-text-centered">
          <h1 class="title is-1 h1-fluid"><span class="subtitle">Hi, I'm Hanna Taylor</span></h1>
          <h1 class="title is-1 h1-fluid">Web/UX/UI/Graphic Designer</h1>
      </div>
    </section>
    <section class="content section section-1">
      <div class="level container">
        <h2 class="is-1 h2-fluid">Section 1</h2>
      </div>
    </section>
    <section class="content section section-2">
      <div class="level container">
        <h2 class="is-1 h2-fluid">Section 2</h2>
      </div>
    </section>
    <section class="content section section-3">
      <div class="level container">
        <h2 class="is-2 h2-fluid">Section 3</h2>
      </div>
    </section>
  </Layout>
)

export default IndexPage
