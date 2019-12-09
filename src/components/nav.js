import { Link } from "gatsby"
import PropTypes from "prop-types"
import { MdDehaze } from "react-icons/md"
import React from "react"

import navStyles from "./navstyles/nav.module.scss"

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: true,
    }
  }

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth < 700 })
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  render() {
    return this.state.isMobile ? (
      <MdDehaze />
    ) : (
      <nav className={navStyles.nav}>
        <div className={navStyles.nav__left}>
          <Link to="/">
            <img
              src={
                "https://res.cloudinary.com/snackmanproductions/image/upload/v1574282613/tutoring-site/logo_transparent_background_ewr81c.png"
              }
              className={navStyles.logo}
            />
          </Link>
        </div>
        <div className={navStyles.nav__right}>
          <Link to="/services/">Services</Link>
          <Link to="/about/">About</Link>
        </div>
      </nav>
    )
  }
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
