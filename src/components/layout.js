/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"


import Header from "./header"
import Footer from "./footer"
import "./sass/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

      <Helmet>
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      </Helmet>

      <div className="body">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="body-container">
          <main>
            <div className="content container center-container">
              {children}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
