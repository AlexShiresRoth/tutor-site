import React from "react"
import PropTypes from "prop-types"
import aboutStyles from "./aboutstyles/AboutHeader.module.scss"
import aboutContent from "./AboutContent"

const AboutHeader = props => {
  const aboutImg = (
    <img
      alt="Willy Williams"
      src="https://res.cloudinary.com/snackmanproductions/image/upload/v1577644109/tutoring-site/75380044_437957306866769_320459200855539712_n_lvvjzd.jpg"
    ></img>
  )
  const aboutText = <>{aboutContent()}</>

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
