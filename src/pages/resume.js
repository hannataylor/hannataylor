import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>Resume</h1>
    <p>Work in Progress</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resume
