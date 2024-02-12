import React from 'react';
import ServicesImg1 from "../../assets/images/serviceCardImg1.png";
import ServicesImg2 from "../../assets/images/serviceCardImg2.png";

import "./Forums.scss";

const Forums = () => {
	return (
		<div className="Forums container" id="forums">
			<h2 className="mainTitle">🚀• The Forums for You</h2>

			<div className="Forums-cards">
				<div className="Forums-card">
					<img src={ServicesImg1} alt="" />
					<div className="Forums-cardDescription">
						<h4 className="Forums-card-title"><span className="textBlue">Rent</span> your favorite book fairly easy on <span className="textBlue">Read it</span>!</h4>
						<p className="Forums-card-text">
							Viewing, rent, and organize your favorite books has
							never been easier. An integrated digital library rent
							that’s simple to use, 'Read it' lets you spend less time
							managing your work and more time actually doing it!
						</p>
						<p className="Forums-card-text">
							Effortless rentals, personalized shelves — 'Read it'
							transforms book management, enhancing your
							reading experience~
						</p>
					</div>
				</div>

				<div className="Forums-card">
					<img src={ServicesImg2} alt="" />
					<div className="Forums-cardDescription">
						<h4 className="Forums-card-title"><span className="textBlue">Rent</span> your favorite book fairly easy on <span className="textBlue">Read it</span>!</h4>
						<p className="Forums-card-text">
							Viewing, rent, and organize your favorite books has
							never been easier. An integrated digital library rent
							that’s simple to use, 'Read it' lets you spend less time
							managing your work and more time actually doing it!
						</p>
						<p className="Forums-card-text">
							Effortless rentals, personalized shelves — 'Read it'
							transforms book management, enhancing your
							reading experience~
						</p>
					</div>
				</div>
			</div>

		</div>
	);
}

export default Forums;