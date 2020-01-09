import React from "react"
import ServicesMap from "./ServicesMap"
import servicesStyles from "./servicesstyles/ServicesHeader.module.scss"
const ServicesHeader = () => {
  return (
    <header className={servicesStyles.header}>
      <ServicesMap />
    </header>
  )
}

export default ServicesHeader
