import React from "react"
import PropTypes from "prop-types"
import indexboxStyles from "./servicesstyles/ServiceIndexMarker.module.scss"
const ServiceIndexMarker = ({ index }) => {
  return (
    <div className={indexboxStyles.index__box}>
      <div className={indexboxStyles.box}>{index}</div>
      <div className={indexboxStyles.box}>{index}</div>
      <div className={indexboxStyles.box}>{index}</div>
    </div>
  )
}

ServiceIndexMarker.propTypes = {
  index: PropTypes.number.isRequired,
}

export default ServiceIndexMarker
