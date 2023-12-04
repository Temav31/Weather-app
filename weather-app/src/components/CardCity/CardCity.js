import "./CardCity.css";
import React from "react";
import Thunderstorm from "../../images/Thunderstorm.svg";


const CardCity = (props) => {
	const {
		name,
		temperature,
		onClick
	} = props;

	function handleClick() {
		console.log(name)
		onClick(name);
	}
	// const value = true;
	// место
	return (
		<button className="card-city" onClick={handleClick}>
			<h3 className='card-city__title'>{name}</h3>
			<p className='card-city__text'>{temperature}°</p>
			<img className='card-city__image' src={Thunderstorm} alt='Значок погоды' />
		</button>
	);
};
export default CardCity;
