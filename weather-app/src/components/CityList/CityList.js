// импорт стилей
import "./CityList.css";
import React from "react";

import CardCity from "../CardCity/CardCity";


const CityList = (props) => {
	const {
		List,
		onFound
	} = props;
	// const value = true;
	// место
	return (
		<section className="city-list">
			{
				List.map((city) => (
					<CardCity
					city={city}
					onClick={onFound}
					key={city.city}
					/>
				))
			}
		</section>
	);
};
export default CityList;
