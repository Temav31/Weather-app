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
		onAdd,
		onDelete,
		List
	} = props;

	const [pageWidth, setPageWidth] = React.useState();


	// функция обновления ширины
	function handleUpdateWidth() {
		setPageWidth(window.innerWidth);
		console.log(window.innerWidth);
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
			{pageWidth > 1152 ? (
				<Header />
			) : (
				<></>
			)}

			<City
				city={city}
				description={description}
				temperature={temperature}
				pressure={pressure}
				time={time}
				onAdd={onAdd}
				onDelete={onDelete}
				List={List}
			// onOpen={onOpen} 
			/>

			{/* <button onClick={onDelete}>jdhfgbdhjvbfgjhvb</button> */}

		</>
	);
};
export default SavedCity;
