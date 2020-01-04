import React from "react"
import PropTypes from "prop-types"
import aboutStyles from "./aboutstyles/AboutHeader.module.scss"
import aboutContent from "./AboutContent"
import { convertToHtml } from "../reusablefuncs/convertToHtml"

const AboutHeader = () => {
  const aboutImg = (
    <img
      alt="Willy Williams"
      src="https://res.cloudinary.com/snackmanproductions/image/upload/v1577644109/tutoring-site/75380044_437957306866769_320459200855539712_n_lvvjzd.jpg"
    ></img>
  )
  const aboutText = (
    <div
      className={aboutStyles.about__text}
      dangerouslySetInnerHTML={convertToHtml(aboutContent())}
    ></div>
  )

  return (
    <header className={aboutStyles.header}>
      <div className={aboutStyles.about__container}>
        <div className={aboutStyles.title__container}>
          <h1>About</h1>
          <p>The Clerk of Oxford Company</p>
        </div>
        <div className={aboutStyles.info__container}>
          <div className={aboutStyles.photo__container}>
            {aboutImg}
            <p>
              The great students of SAT preparation: their skills, their habits,
              and the games they play.
            </p>
          </div>
          {aboutText}
        </div>
      </div>
    </header>
  )
}

AboutHeader.propTypes = {}

export default AboutHeader
