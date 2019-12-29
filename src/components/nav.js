import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FiMenu, FiX } from "react-icons/fi"
import React from "react"

import navStyles from "./navstyles/nav.module.scss"

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: true,
      mobileNavShowing: false,
    }
  }

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth < 700 })
  }
  handleNavToggle = e => {
    this.setState({
      mobileNavShowing: !this.state.mobileNavShowing,
    })
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  render() {
    const servicesList = (
      <div className={navStyles.services__list}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </div>
    )

    return this.state.isMobile ? (
      <nav className={navStyles.nav}>
        <div className={navStyles.mobile__logo}>
          <img src="" alt="logo"></img>
        </div>
        <div
          className={navStyles.toggle__box}
          onClick={e => this.handleNavToggle(e)}
        >
          <FiMenu
            style={
              this.state.mobileNavShowing
                ? {
                    transform: `rotate(180deg)`,
                    transition: "all .3s ease-in-out",
                  }
                : {
                    transform: `rotate(-180deg)`,
                    transition: "all .3s ease-in-out",
                  }
            }
          />
        </div>
        <div
          className={
            this.state.mobileNavShowing
              ? `${navStyles.sideMenu}`
              : `${navStyles.sideMenu} ${navStyles.sideMenu__hide}`
          }
        >
          <div className={navStyles.sideMenu__container}>
            <div
              className={navStyles.close__box}
              onClick={e => this.handleNavToggle(e)}
            >
              <FiX
                style={
                  this.state.mobileNavShowing
                    ? {
                        transform: `rotate(180deg)`,
                        transition: "all .3s ease-in-out",
                      }
                    : {
                        transform: `rotate(-180deg)`,
                        transition: "all .3s ease-in-out",
                      }
                }
              />
            </div>
            {servicesList}
          </div>
        </div>
      </nav>
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
          <Link to="/about/">About</Link>
          <Link to="/services/">Services</Link>
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
