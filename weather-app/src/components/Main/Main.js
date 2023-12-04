import React from "react";
// импорт стилей
import "./Main.css";
// импорт блоков

// импорт базовых
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Example from "../Example/Example";
import CityList from "../CityList/CityList";


const Main = ({ onSearch, onClick, List, onFound, value }) => {



	return (
		<>
			<Header />
			{/* Основной бллок */}
			<main>
				<SearchForm
					onSearch={onSearch}
					value={value}
				/>
				{List.length ? (
					<CityList
						onFound={onFound}
						List={List}
					/>
				) : (
					<Example
						onClick={onClick}
					/>
				)}
			</main>
		</>
	);
};
export default Main;
