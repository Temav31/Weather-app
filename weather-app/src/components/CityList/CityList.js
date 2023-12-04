// импорт стилей
import "./CityList.css";
import React from "react";
import Thunderstorm from "../../images/Thunderstorm.svg";

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
					name={city.city}
					temperature={city.temperature} 
					onClick={onFound}
					key={city.city}
					/>
				))
			}
		</section>
	);
};
export default CityList;
