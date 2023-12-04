import React from "react";
// импорт стилей
import "./Main.css";
// импорт блоков

// импорт базовых
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Example from "../Example/Example";


const Main = ({ onSearch, onClick }) => {
	const city = {
		name: "sddgdfdffg",
		src: "Belsdfscxvdgain"
	};
	const operatorList = [
		{
			name: "Мтс",
			src: "Mts"
		},
		{
			name: "Мегафон",
			src: "Megafon"
		},
		{
			name: "Билайн",
			src: "Belain"
		}
	];
	localStorage.setItem("object", JSON.stringify(operatorList));



	function handleClick() {
		var object = JSON.parse(localStorage.getItem("object"));
		const newSavedMovie = [...object, city]
		console.log(newSavedMovie)
		localStorage.setItem("object", JSON.stringify(newSavedMovie));

	}
	return (
		<>
			<Header />
			{/* Основной бллок */}
			<main>
				<SearchForm
					onSearch={onSearch}
				/>
				<Example
					onClick={onClick}
				/>
				{/* <button onClick={onClick}>jdhfgbdhjvbfgjhvb</button> */}
			</main>
		</>
	);
};
export default Main;
