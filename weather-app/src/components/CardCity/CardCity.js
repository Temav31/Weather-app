import "./CardCity.css";
import React, {useState, useEffect, useLayoutEffect} from "react";
import Thunderstorm from "../../images/Weather/Thunderstorm.svg";

import { getImage } from '../../utils/constant';




const CardCity = (props) => {
	const {
		city,
		onClick,
	} = props;
	
	const [linkImage, setLinkImage] = useState("");
	const cat = "Thunderstorm";

	useLayoutEffect(() => {
		// console.log(getImage(cat))
		// setLinkImage(getImage(cat));
		setLinkImage("../../images/Weather/Thunderstorm.svg");
		
	})
	// const linkImage = "../../images/Weather/"+{cat}+".svg";

	
	function handleClick() {
		console.log(city.image)
		// console.log(linkImage)
		onClick(city.city);
	}
	// const value = true;
	// место
	return (
		<button className="card-city" onClick={handleClick}>
			<h3 className='card-city__title'>{city.city}</h3>
			<p className='card-city__text'>{city.temperature}°</p>
			<img className='card-city__image' src={city.image} alt='Значок погоды' />
		</button>
	);
};
export default CardCity;
