import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

const about = props => {
	return (
		<Layout>
			<SEO title="About" />
			<h1>About</h1>
		</Layout>
	)
}

about.propTypes = {}

export default about
