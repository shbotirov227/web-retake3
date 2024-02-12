import React from 'react';

import "./Location.scss";

const Location = () => {
	return (
		<div className="Location container" id="location">
			<h2 className="mainTitle">🗺• Our Library Location</h2>
			<iframe className="Location-map" title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d375.0533568240332!2d69.215697!3d41.234259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6183ea313917%3A0xdc59607ad734d20c!2sPDP%20University!5e0!3m2!1sru!2sus!4v1707718060597!5m2!1sru!2sus"
			style={{}}
			height={405}
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
	);
}

export default Location;