// импорт стилей
import "./Header.css";
import React from "react";
import Logo from "../../images/logo.svg";

const Header = () => {
	// const value = true;
	// место
	return (
		<header className="header" >
			<div className="header__logo">
				<img className="header__image" src={Logo} alt="Лого" />
				<h1 className='header__title'>WeatherCheck</h1>
			</div>
		</header>
	);
};
export default Header;
