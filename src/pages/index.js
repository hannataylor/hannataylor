import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hanna Taylor</h1>
    <p>Under Construction</p>
    <Link to="/resume/">Go to Resume</Link>
  </Layout>
)

export default IndexPage
