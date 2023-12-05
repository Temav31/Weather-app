import "./CardCity.css";
import React, {useState, useLayoutEffect} from "react";

import { getImage } from '../../utils/constant';




const CardCity = (props) => {
	const {
		city,
		onClick,
	} = props;
	
	const [linkImage, setLinkImage] = useState("");

	useLayoutEffect(() => {
		setLinkImage(getImage(city.description));
	});

	
	function handleClick() {
		console.log(city.description)
		// console.log(linkImage)
		onClick(city.city);
	}
	// const value = true;
	// место
	return (
		<button className="card-city" onClick={handleClick}>
			<h3 className='card-city__title'>{city.city}</h3>
			<p className='card-city__text'>{city.temperature}°</p>
			<img className='card-city__image' src={linkImage} alt='Значок погоды' />
		</button>
	);
};
export default CardCity;
