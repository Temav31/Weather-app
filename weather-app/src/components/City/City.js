// импорт стилей
import "./City.css";
import React, { useState } from "react";
import Logo from "../../images/logo.svg";
import Back from "../../images/big_left.svg";
import BookmarkActive from "../../images/Bookmark_active.svg";
import Bookmark from "../../images/Bookmark.svg";


const City = () => {

	const [city, setCity] = useState("Москва");
	const [description, setDescription] = useState("Облачно с прояснениями");
	const [temperature, setTemperature] = useState("-13°");
	const [pressure, setPressure] = useState("756 мм рт. ст.");
	const [time, setTime] = useState("Закат в 18:00");
	// const value = true;
	// место
	return (
		<section className="city" >
			<img className="city__image-back" src={Back} alt="Лого" />
			<img className="city__image-bookmark" src={BookmarkActive} alt="Лого" />
			<div className="city__container">
				<h2 className='city__title'>{city}</h2>
				<p className='city__text'>{description}</p>
				<p className='city__temperature'>{temperature}</p>
				<img />
				<p className='city__pressure'>Облачно с прояснениями</p>
				<p className='city__time'>Облачно с прояснениями</p>
			</div>
		</section>
	);
};
export default City;
