import React from "react";
// импорт стилей
import "./SavedCity.css";
// импорт блоков

// импорт базовых
import Header from "../Header/Header";
import City from "../City/City";
// import Example from "../Example/Example";


const SavedCity = (props) => {
	const {
		city,
		description,
		temperature,
		pressure,
		time,
	} = props;

	const [pageWidth, setPageWidth] = React.useState("");


	// функция обновления ширины
	function handleUpdateWidth() {
		setPageWidth(window.innerWidth);
		// console.log("hi");
	}
	// функция увеличения ширины
	function handleAddWidth() {
		window.addEventListener("resize", handleUpdateWidth);
	}
	// функция уменьшения ширины
	function handleRemoveWidth() {
		window.removeEventListener("resize", handleUpdateWidth);
	}

	React.useEffect(() => {
		handleAddWidth();
		return () => handleRemoveWidth();
	}, []);

	return (
		<>
			{/* {pageWidth >= 1280 ? (
				<Header />
			) : (
				<></>
			)} */}
			{/* Основной бллок */}
			<City
				city={city}
				description={description}
				temperature={temperature}
				pressure={pressure}
				time={time}
			// onOpen={onOpen} 
			/>

		</>
	);
};
export default SavedCity;