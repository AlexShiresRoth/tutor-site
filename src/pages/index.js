import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Header />
		<Link to="/services/">Go to services</Link>
		<Link to="/about/">Go to about</Link>
	</Layout>
)

export default IndexPage
