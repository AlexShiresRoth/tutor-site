import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import navStyles from "./navstyles/nav.module.scss"

const Nav = ({ siteTitle }) => (
	<nav className={navStyles.nav}>
		<div className={navStyles.nav__left}>
			<Link to="/">
				<img
					src={
						"https://res.cloudinary.com/snackmanproductions/image/upload/v1574282613/tutoring-site/logo_transparent_background_ewr81c.png"
					}
					style={{ width: "12rem" }}
				/>
			</Link>
		</div>
		<div className={navStyles.nav__right}>
			<Link to="/services/">Services</Link>
			<Link to="/about/">About</Link>
		</div>
	</nav>
)

Nav.propTypes = {
	siteTitle: PropTypes.string,
}

Nav.defaultProps = {
	siteTitle: ``,
}

export default Nav
