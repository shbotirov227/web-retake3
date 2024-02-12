import React from 'react';

import "./Packages.scss";
import PackageCard from "../../components/PackageCard/PackageCard";

const Packages = () => {

	const packageCardData = [
		{
			id: 0,
			title: "Primary",
			items: [
				"Book of the month",
				"Access to one comment forum and discussion group",
				"Mug for bookmarks and drinks",
				"Beverages x 1 – a can of coffee or tea"
			],
			cost: "$12",
		},

		{
			id: 1,
			title: "Medium",
			items: [
				"Book of the Month and one Personal Choice Book",
				"Access to two forums and discussion groups",
				"Bookmark and book bag",
				"Drinks x 2 – coffee, hot chocolate or tea box"
			],
			cost: "$27",
		},

		{
			id: 2,
			title: "Advanced",
			items: [
				"Book of the Month and three personal choice books",
				"Open access to all forums and discussion groups",
				"Live band entertainment and magician",
				"Drinks x 3 – a box of coffee, hot chocolate or tea"
			],
			cost: "$45",
		}
	];

	return (
		<div className="Packages container" id="packages">
			<h2 className="mainTitle">💬• Packages</h2>

			<div className="Packages-packages">
				{
					packageCardData.map((index, el) => (
						<PackageCard
							key={packageCardData[el].id}
							title={packageCardData[el].title}
							items={packageCardData[el].items}
							cost={packageCardData[el].cost}
						/>
					))
				}
			</div>
		</div>
	);
}

export default Packages;