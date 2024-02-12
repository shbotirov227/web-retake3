import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/images/logo.png";

import "./Header.scss";

const Header = () => {
  	return (
		<div className="Header">
			<div className="Header-inner container">
				
				<div className="Header-left">
					<Link to="/"><img className="logo" src={Logo} alt="logo" /></Link>
					<ul className="Header-links">
						<li><HashLink className="Header-link" to="#about">About</HashLink></li>
						<li><HashLink className="Header-link" to="#services">Service</HashLink></li>
						<li><HashLink className="Header-link" to="#packages">Packages</HashLink></li>
						<li><HashLink className="Header-link" to="#location">Location</HashLink></li>
					</ul>
				</div>

				<div>
					<a className="Header-link" style={{color: "#fff"}} href="tel:+998787777747">+998 78 777 77 47</a>
					<Link to="/signup" className="Header-loginBtn">Sign up</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;