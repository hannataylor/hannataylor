import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Typography = () => (
  <Layout>
    <SEO title="Typography" />
    <h1>This is an h1</h1>
    <h2>This is an h2</h2>
    <h3>This is an h3</h3>
    <h4>This is an h4</h4>
    <h5>This is an h5</h5>
    <h6>This is an h5</h6>
    <p>This is a paragraph</p>
    <a href='/'>This is a link</a>
    <button>This is a button</button>
    <caption>This is a caption</caption>
    <code>This is code</code>
    <ul>
        <li>This</li>
        <li>is</li>
        <li>an</li>
        <li>unordered</li>
        <li>list</li>
    </ul>
    <ol>
        <li>This</li>
        <li>is</li>
        <li>an</li>
        <li>ordered</li>
        <li>list</li>
    </ol>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Typography
