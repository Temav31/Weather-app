// импорт стилей
import "./City.css";
import React, { useEffect, useState } from "react";
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
		onAdd,
		onDelete,
		List
	} = props;

	const [value, setValue] = useState(false);
	useEffect(() => {
		const data = List.filter((film) => {
			return !film.city.includes(city);
		});
		if (data.length === List.length) {
			console.log("диз");
			setValue(false);
		} else {
			setValue(true);
			console.log("лайк");
		}
	});

	function handleClick() {
		if(value){
			onDelete();
		} else {
			onAdd();
		}
	}

	return (
		<section className="city" >
			<Link to="/">
				<img className="city__image-back" src={Back} alt="Значок назад" />
			</Link>
			<button onClick={handleClick}>
				{value ? (
					<img className="city__image-bookmark" src={BookmarkActive} alt="Значок избранное" />
				) : (
					<img className="city__image-bookmark" src={Bookmark} alt="Значок избранное" />
				)}
			</button>
			<div className="city__container">
				<h2 className='city__title'>{city}</h2>
				<p className='city__text'>{description}</p>
				<p className='city__temperature'>{temperature}°</p>

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
