import React from "react"
import { services } from "./servicesArray"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import servicesImagesQuery from "./servicesImagesQuery"
import servicesStyles from "./servicesstyles/ServicesMap.module.scss"
import ServicesIndexMarker from "./ServiceIndexMarker"
//TODO debug scroll speed behavior
const ServicesMap = () => {
  const serviceRef = React.createRef()
  const animationRef = React.createRef()
  const serviceImgs = servicesImagesQuery()

  const scrollServicesUp = () => {
    if (serviceRef.current) {
      serviceRef.current.scrollTop = serviceRef.current.scrollTop -= serviceRef.current.getBoundingClientRect().height
      animationRef.current = requestAnimationFrame(scrollServicesUp)
    }
    return cancelAnimationFrame(animationRef.current)
  }
  const scrollServicesDown = () => {
    if (serviceRef.current) {
      serviceRef.current.scrollTop = serviceRef.current.scrollTop += serviceRef.current.getBoundingClientRect().height
      animationRef.current = requestAnimationFrame(scrollServicesDown)
    }
    return cancelAnimationFrame(animationRef.current)
  }
  const servicesMap = services.map((service, i) => {
    return (
      <div
        className={servicesStyles.service__container}
        style={{
          background: `url(${serviceImgs[i].secure_url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {i > 0 && i <= services.length - 1 ? (
          <MdKeyboardArrowUp
            className={servicesStyles.arrow__up}
            onClick={() => scrollServicesUp(i)}
          />
        ) : null}
        <div className={servicesStyles.img__overlay}></div>
        <div className={servicesStyles.service__heading}>
          {service.icon}
          <h3>{service.service}</h3>
        </div>
        <div className={servicesStyles.service__list}>
          {service.list.map(item => (
            <p>{item}</p>
          ))}
        </div>
        <div className={servicesStyles.service__list__bg}></div>
        {i >= 0 && i < services.length - 1 ? (
          <MdKeyboardArrowDown
            className={servicesStyles.arrow__down}
            onClick={() => scrollServicesDown(i)}
          />
        ) : null}
      </div>
    )
  })
  return (
    <div className={servicesStyles.services__container} ref={serviceRef}>
      {servicesMap}
      <ServicesIndexMarker />
    </div>
  )
}

export default ServicesMap
