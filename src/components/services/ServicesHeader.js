import React from "react"
import PropTypes from "prop-types"
import ServicesMap from "./ServicesMap"
import servicesStyles from "./servicesstyles/ServicesHeader.module.scss"
const ServicesHeader = props => {
  return (
    <header className={servicesStyles.header}>
      <div className={servicesStyles.title__container}>
        <h1>Services</h1>
      </div>
      <ServicesMap />
    </header>
  )
}

ServicesHeader.propTypes = {}

export default ServicesHeader
