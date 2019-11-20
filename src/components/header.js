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
      <div className={headerStyles.text__box}>
        <h1>{data.site.siteMetadata.title}</h1>
        <h2>Willy Williams Tutoring</h2>
      </div>
      <div className={headerStyles.services__grid}>
        <div className={headerStyles.item}>
          <p>In Person Tutoring</p>
        </div>
        <div className={headerStyles.item}>
          <p>Virtual Tutoring</p>
        </div>
        <div className={headerStyles.item}>
          <p>Video Conference</p>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header
