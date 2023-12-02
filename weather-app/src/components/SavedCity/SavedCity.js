import React from "react";
// импорт стилей
import "./SavedCity.css";
// импорт блоков

// импорт базовых
import Header from "../Header/Header";
import City from "../City/City";
// import Example from "../Example/Example";


const SavedCity = ({onOpen}) => {
	return (
		<>
			{/* <Header /> */}
			{/* Основной бллок */}
			<main>
				<City 
				// onOpen={onOpen} 
				/>
				{/* <Example /> */}
			</main>
		</>
	);
};
export default SavedCity;
