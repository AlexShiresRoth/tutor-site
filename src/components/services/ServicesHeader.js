import React from "react"
import ServicesMap from "./ServicesMap"
import servicesStyles from "./servicesstyles/ServicesHeader.module.scss"
const ServicesHeader = () => {
  return (
    <header className={servicesStyles.header}>
      <div className={servicesStyles.title__container}>
        <h1>Services</h1>
      </div>
      <ServicesMap />
    </header>
  )
}

export default ServicesHeader
