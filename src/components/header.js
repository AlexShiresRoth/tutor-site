import React from "react"
import headerStyles from "./headerstyles/header.module.scss"
import { FiVideo, FiUsers } from "react-icons/fi"
import { FaBookOpen } from "react-icons/fa"
import { TiDeviceLaptop } from "react-icons/ti"
import { MdDoneAll } from "react-icons/md"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      virtual: false,
      video: false,
      inperson: false,
    }
  }

  render() {
    const inPersonHover = (
      <ul>
        <li>
          <MdDoneAll />
          <p>One on One</p>
        </li>
        <li>
          <MdDoneAll />
          <p>In Person Tutoring</p>
        </li>
        <li>
          <MdDoneAll />
          <p>For one hour or idk</p>
        </li>
      </ul>
    )

    const virtualHover = (
      <ul>
        <li>
          <MdDoneAll />
          <p>Meet Online at your convenience</p>
        </li>
        <li>
          <MdDoneAll />
          <p>Virtually connect with Zoom</p>
        </li>
        <li>
          <MdDoneAll />
          <p>For one hour or idk</p>
        </li>
      </ul>
    )

    const videoHover = (
      <ul>
        <li>
          <MdDoneAll />
          <p> Meet Online at your convenience</p>
        </li>
        <li>
          <MdDoneAll />
          <p>Virtually connect with Zoom</p>
        </li>
        <li>
          <MdDoneAll />
          <p>For one hour or idk</p>
        </li>
      </ul>
    )

    return (
      <header className={headerStyles.header}>
        <div className={headerStyles.text__box}>
          <h1>The Clerk of Oxford Company</h1>
          <div className={headerStyles.divider}>
            <span></span>
            <FaBookOpen />
            <span></span>
          </div>
          <h2>Willy Williams Tutoring</h2>
        </div>
        <div className={headerStyles.services__grid}>
          <div
            className={headerStyles.item}
            onMouseOver={() => this.setState({ inperson: true })}
            onMouseLeave={() => this.setState({ inperson: false })}
          >
            <FiUsers />
            <h3>In Person Tutoring</h3>
            {this.state.inperson ? inPersonHover : null}
          </div>
          <div
            className={headerStyles.item}
            onMouseOver={() => this.setState({ virtual: true })}
            onMouseLeave={() => this.setState({ virtual: false })}
          >
            <TiDeviceLaptop />
            <h3>Virtual Tutoring</h3>
            {this.state.virtual ? virtualHover : null}
          </div>
          <div
            className={headerStyles.item}
            onMouseOver={() => this.setState({ video: true })}
            onMouseLeave={() => this.setState({ video: false })}
          >
            <FiVideo />
            <h3>Video Conference</h3>
            {this.state.video ? videoHover : null}
          </div>
        </div>
      </header>
    )
  }
}

export default Header
