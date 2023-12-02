// импорт стилей
import "./Example.css";
import React from "react";
import { Link } from 'react-router-dom';
import Arrow from "../../images/Arrow.svg";
import Bookmark from "../../images/Bookmark.svg";

const Example = () => {
	// const value = true;
	// место
	return (
		<div className="example" >
			<div className="example__container">
				<img className="example__image-arrow" src={Arrow} alt="Значок стрелка" />
				<div className='example__container-city'>
					<p className="example__text">
						Начните вводить город, например,
						<Link className="example__link">Ижевск</Link>
					</p>
				</div>
			</div>
			<div className="example__container-mark">
					<p className="example__text-description">Используйте значок «закладки»,
						чтобы закрепить город на главной</p>
					<img className="example__image-bookmark" src={Bookmark} alt="Значок избранное" />
				</div>
		</div>
	);
};
export default Example;
