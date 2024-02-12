import React from 'react';

import "./BookCard.scss";

const BookCard = ({ eventImg, title, text, date, month, eventType, author }) => {
	return (
		<div className="BookCard">
			<img className="BookCard-img" src={eventImg} alt="eventImg" />

			<div className="BookCard-bottom">
				<div className="dates">
					<h4 className="BookCard-author">{author}</h4>
					{/* <h4 className="EventCard-type">{eventType}</h4> */}
				</div>
				<div>
					{/* <h3 className="EventCard-title">{title}</h3> */}
					<p className="BookCard-text">{text}</p>
				</div>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
						<h4 className="BookCard-date">$ {date}</h4>

					<div style={{ display: "flex" }}>
						{/* <span className="EventCard-month">{month}</span> */}
					</div>
				</div>
			</div>

			<button className="buyBtn">Add to cart</button>
		</div>
	);
}

export default BookCard;