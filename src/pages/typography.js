import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Typography = () => (
  <Layout>
    <SEO title="Typography" />
    <h1 className="title is-1 h1-fluid">This is an h1</h1>
    <h2 className="title is-2 h2-fluid">This is an h2</h2>
    <h3 className="title is-3 h3-fluid">This is an h3</h3>
    <h4 className="title is-4">This is an h4</h4>
    <h5 className="title is-5">This is an h5</h5>
    <h6 className="title is-6">This is an h5</h6>
    <p>This is a paragraph</p>
    <a href='/'>This is a link</a>
    <button className="button">This is a button</button>
    <button className="button is-primary">This is a primary button</button>
    <caption>This is a caption</caption>
    <code>This is code</code>
    <div className="content">
        <ul>
            <li>This</li>
            <li>is</li>
            <li>an</li>
            <li>unordered</li>
            <li>list</li>
        </ul>
    </div>
    <div className="content">
        <ol className="is-lower-alpha">
            <li>This</li>
            <li>is</li>
            <li>an</li>
            <li>ordered</li>
            <li>list</li>
        </ol>
    </div>
    <figure className="image is-128x128">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="placeholder"/>
        </figure>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Typography
