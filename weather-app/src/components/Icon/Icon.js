import React from 'react';
// import Logo from "../../images/WeatherSprite.svg"
import Logo from "../../images/cat.svg"

const Icon = ({ id, className }) => (
	<svg className={className} >
		<use href={`${Logo}#${id}`}></use>
	</svg >
);
export default Icon;
