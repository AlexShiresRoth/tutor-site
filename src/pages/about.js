import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutHeader from "../components/about/AboutHeader"

const about = props => {
  return (
    <Layout>
      <SEO title="About" />
      <AboutHeader />
    </Layout>
  )
}

about.propTypes = {}

export default about
