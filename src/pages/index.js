import React, { memo } from "react"
import { cold } from "react-hot-loader"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<Header />
		</Layout>
	)
}

export default memo(IndexPage)
