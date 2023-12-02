import React from "react";
// импорт стилей
import "./Main.css";
// импорт блоков

// импорт базовых
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Example from "../Example/Example";


const Main = ({onOpen}) => {
	return (
		<>
			<Header />
			{/* Основной бллок */}
			<main>
				<SearchForm 
				// onOpen={onOpen} 
				/>
				<Example />
			</main>
		</>
	);
};
export default Main;
