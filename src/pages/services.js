import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ServicesHeader from "../components/services/ServicesHeader"
const services = props => {
  return (
    <Layout>
      <SEO title="Services" />
      <ServicesHeader />
    </Layout>
  )
}

services.propTypes = {}

export default services
