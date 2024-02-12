import React from 'react';
import HeroImg from "../../assets/images/headerImg.png";

import "./HeroSection.scss";

const HeroSection = () => {
	return (
		<div className="HeroSection">
			<div className="HeroSection-inner container">

				<div className="HeroSection-left">
					<h3 className="HeroSection-title">Search & review your <span className="titleBlue">fav book</span> effortlessly</h3>
					<p className="HeroSection-text">
						Embark on a literary journey like never before with our revolutionary
						library application! Introducing a seamless experience
						that transcends traditional boundaries, where  you
						can effortlessly search your favorite books.✨
					</p>
					<button className="btn-primary">Start now →</button>
				</div>

				<div className="HeroSection-right">
					<img src={HeroImg} alt="headerImg" />
				</div>

			</div>
		</div>
	);
}

export default HeroSection;