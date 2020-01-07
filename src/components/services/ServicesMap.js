import React from "react"
import PropTypes from "prop-types"
import { FiVideo, FiUsers } from "react-icons/fi"
import { TiDeviceLaptop } from "react-icons/ti"
import servicesStyles from "./servicesstyles/ServicesMap.module.scss"
const ServicesMap = () => {
  const services = [
    {
      icon: <TiDeviceLaptop />,
      service: "Virtual Tutoring",
      list: [
        "Meet Online at your convenience",
        "Virtually connect with Zoom",
        "For one hour or idk",
      ],
    },
    {
      icon: <FiVideo />,
      service: "Video Tutoring",
      list: [
        "Meet Online at your convenience",
        "Virtually connect with Zoom",
        "For one hour or idk",
      ],
    },
    {
      icon: <FiUsers />,
      service: "In-Person Tutoring",
      list: ["One on One", "Meet in person", "For one hour or idk"],
    },
  ]

  const servicesMap = services.map((service, i) => {
    return (
      <div className={servicesStyles.service__container}>
        <div className={servicesStyles.service__heading}>
          {service.icon}
          <h3>{service.service}</h3>
        </div>
        <div className={servicesStyles.service__list}>
          {service.list.map(item => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    )
  })
  return <div className={servicesStyles.services__container}>{servicesMap}</div>
}

ServicesMap.propTypes = {}

export default ServicesMap
