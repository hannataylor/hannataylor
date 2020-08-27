import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="section">
      <h1 className="h1-fluid">Sorry, page not found</h1>
      <Link to="/">Go back to the Homepage</Link>
      </section>
  </Layout>
)

export default NotFoundPage
