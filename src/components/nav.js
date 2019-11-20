import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import navStyles from "./navstyles/nav.module.scss"

const Nav = ({ siteTitle }) => (
	<nav className={navStyles.nav}>
		<h1>
			<Link to="/">{siteTitle}</Link>
		</h1>
	</nav>
)

Nav.propTypes = {
	siteTitle: PropTypes.string,
}

Nav.defaultProps = {
	siteTitle: ``,
}

export default Nav
