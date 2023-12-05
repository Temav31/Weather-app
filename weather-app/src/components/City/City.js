// импорт стилей
import "./City.css";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { Link } from 'react-router-dom';

import { getImage } from '../../utils/constant';

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

	const [linkImage, setLinkImage] = useState("");

	useLayoutEffect(() => {
		setLinkImage(getImage(description));
	});

	const [value, setValue] = useState(false);
	useEffect(() => {
		const data = List.filter((film) => {
			return !film.city.includes(city);
		});
		if (data.length === List.length) {
			// console.log("диз");
			setValue(false);
		} else {
			setValue(true);
			// console.log("лайк");
		}
	});

	function handleClick() {
		if (value) {
			onDelete();
		} else {
			onAdd();
		}
	}

	return (
		<section className="city" >
			<div className="city__container-icon">
			<Link to="/" className='city__link'>
				<Icon id="big_left" className="city__image-back" text="Значок назад" />
				<p className="city__link-text">Назад</p>
			</Link>
			<button className="city__button" onClick={handleClick} >
				{value ? (
					<Icon id="Bookmark_active" className="city__image-bookmark" text="Значок избранное" />
				) : (
					<Icon id="Bookmark" className="city__image-bookmark" text="Значок избранное" />
				)}
			</button>
			</div>

			<div className="city__container">
				<h2 className='city__title'>{city}</h2>
				<p className='city__text'>{description}</p>
				<div className="city__container-temp">
					<p className='city__temperature'>{temperature}°</p>
					<img className="city__image-weather" src={linkImage} alt="Значок погоды" />
				</div>
				<div className='city__container-pressure'>
					<Icon id="barometer" className="city__image-pressure" text="Значок барометр" />
					<p className='city__pressure'>{pressure} мм рс. ст.</p>
				</div>
				<p className='city__time'>Закат в {time}</p>
			</div>
		</section>
	);
};
export default City;
