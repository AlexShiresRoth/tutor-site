import React from "react"
import headerStyles from "./headerstyles/header.module.scss"
import { FiVideo, FiUsers } from "react-icons/fi"
import { FaBookOpen } from "react-icons/fa"
import { TiDeviceLaptop } from "react-icons/ti"

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
				<li>One on One</li>
				<li>In Person Tutoring</li>
				<li>For one hour or idk</li>
			</ul>
		)

		const virtualHover = (
			<ul>
				<li>Meet Online at your convenience</li>
				<li>Virtually connect with Zoom</li>
				<li>For one hour or idk</li>
			</ul>
		)

		const videoHover = (
			<ul>
				<li>Meet Online at your convenience</li>
				<li>Virtually connect with Zoom</li>
				<li>For one hour or idk</li>
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
						<p>In Person Tutoring</p>
						{this.state.inperson ? inPersonHover : null}
					</div>
					<div
						className={headerStyles.item}
						onMouseOver={() => this.setState({ virtual: true })}
						onMouseLeave={() => this.setState({ virtual: false })}
					>
						<TiDeviceLaptop />
						<p>Virtual Tutoring</p>
						{this.state.virtual ? virtualHover : null}
					</div>
					<div
						className={headerStyles.item}
						onMouseOver={() => this.setState({ video: true })}
						onMouseLeave={() => this.setState({ video: false })}
					>
						<FiVideo />
						<p>Video Conference</p>
						{this.state.video ? videoHover : null}
					</div>
				</div>
			</header>
		)
	}
}

export default Header
