import React from 'react'
import BookCard from "../../components/BookCard/BookCard";
import bookImg1 from "../../assets/images/bookImg1.jpg";
import bookImg2 from "../../assets/images/bookImg2.jpg";
import bookImg3 from "../../assets/images/bookImg3.jpg";
import bookImg4 from "../../assets/images/bookImg4.jpg";

import "./Books.scss";

const Books = () => {

	const data = [
		{
			id: 0,
			eventImg: bookImg4,
			eventType: "Drama",
			author: "Eve Ocotillo",
			date: "10.23",
			month: "USD",
			title: "The Violet and the Tom (ebook)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti aliquid, praesentium"
		},
		
		{
			id: 1,
			eventImg: bookImg2,
			eventType: "Romantic",
			author: "FayJay",
			date: "9.35",
			month: "USD",
			title: "The Student Prince (The Student Prince, #1)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti aliquid, praesentium possimus"
		},
		
		{
			id: 2,
			eventImg: bookImg3,
			eventType: "Melodrama",
			author: "Cordelia Kingsbridge",
			date: "20.74",
			month: "USD",
			title: "Heart in Hand (ebook)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti corrupti aliquid, praesentium possimus"
		},
		
		{
			id: 3,
			eventImg: bookImg1,
			eventType: "Horror",
			author: "RemainNameless",
			date: "8.45",
			month: "USD",
			title: "Control (online fiction)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti aliquid, praesentium"
		},

		{
			id: 0,
			eventImg: bookImg3,
			eventType: "Drama",
			author: "Eve Ocotillo",
			date: "10.23",
			month: "USD",
			title: "The Violet and the Tom (ebook)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti aliquid, praesentium"
		},
		
		{
			id: 1,
			eventImg: bookImg1,
			eventType: "Romantic",
			author: "FayJay",
			date: "9.35",
			month: "USD",
			title: "The Student Prince (The Student Prince, #1)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti aliquid, praesentium possimus"
		},
		
		{
			id: 2,
			eventImg: bookImg2,
			eventType: "Melodrama",
			author: "Cordelia Kingsbridge",
			date: "20.74",
			month: "USD",
			title: "Heart in Hand (ebook)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti corrupti aliquid, praesentium possimus"
		},
		
		{
			id: 3,
			eventImg: bookImg4,
			eventType: "Horror",
			author: "RemainNameless",
			date: "8.45",
			month: "USD",
			title: "Control (online fiction)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti aliquid, praesentium"
		},
	];

	return (
		<div className="Books container">
			<h2 className="mainTitle">🚀• Books</h2>
			<div className="Books-cards">
				{
					data.map((event) => (
						<BookCard
							value={event}
							key={event.id}
							eventImg={event.eventImg}
							eventType={event.eventType}
							title={event.title}
							text={event.text}
							date={event.date}
							month={event.month}
							author={event.author}
						/>
					))
				}
			</div>
		</div>
	);
}

export default Books