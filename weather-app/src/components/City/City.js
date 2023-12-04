// импорт стилей
import "./City.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Back from "../../images/big_left.svg";
import BookmarkActive from "../../images/Bookmark_active.svg";
import Bookmark from "../../images/Bookmark.svg";
import Thunderstorm from "../../images/Thunderstorm.svg";
import Barometer from "../../images/barometer.svg";

import Icon from "../Icon/Icon";


const City = (props) => {
	const {
		city,
		description,
		temperature,
		pressure,
		time,
	} = props;


	
	return (
		<section className="city" >
			<Link to="/">
			<img className="city__image-back" src={Back} alt="Значок назад" />
			</Link>			
			<img className="city__image-bookmark" src={BookmarkActive} alt="Значок избранное" />
			<div className="city__container">
				<h2 className='city__title'>{city}</h2>
				<p className='city__text'>{description}</p>
				<p className='city__temperature'>{temperature}</p>

				<img className="city__image-weather" src={Thunderstorm} alt="Значок погоды" />
				{/* <Icon id="logo" className="page-min" /> */}
				<div className='city__container-pressure'>
					<img className="city__image-pressure" src={Barometer} alt="Значок барометра" />
					<p className='city__pressure'>{pressure} мм рс. ст.</p>
				</div>
				<p className='city__time'>Закат в {time}</p>
			</div>
		</section>
	);
};
export default City;
