import React from "react"
import PropTypes from "prop-types"
import aboutStyles from "./aboutstyles/AboutHeader.module.scss"

const AboutHeader = props => {
  const aboutImg = (
    <img
      alt="Willy Williams"
      src="https://res.cloudinary.com/snackmanproductions/image/upload/v1577644109/tutoring-site/75380044_437957306866769_320459200855539712_n_lvvjzd.jpg"
    ></img>
  )
  const aboutText = (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </>
  )
  return (
    <header className={aboutStyles.header}>
      <div className={aboutStyles.about__container}>
        <div className={aboutStyles.title__container}>
          <h1>About</h1>
          <p>The Clerk of Oxford Company</p>
        </div>
        <div className={aboutStyles.info__container}>
          <div className={aboutStyles.photo__container}>{aboutImg}</div>
          <div className={aboutStyles.about__text}>{aboutText}</div>
        </div>
      </div>
    </header>
  )
}

AboutHeader.propTypes = {}

export default AboutHeader
