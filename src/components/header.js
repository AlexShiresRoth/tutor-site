import React from "react"
import PropTypes from "prop-types"
import headerStyles from "./headerstyles/header.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
	const data = useStaticQuery(graphql`
		query titleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<header className={headerStyles.header}>
			<h1>{data.site.siteMetadata.title}</h1>
		</header>
	)
}

Header.propTypes = {}

export default Header
