import './App.css';
import { useEffect, useState, useLayoutEffect } from 'react';
import {
	Route,
	Routes,
	useLocation,
	useNavigate,
	Navigate
} from 'react-router-dom';
import axios from 'axios'
// компоненты
import Main from '../Main/Main';
import SavedCity from '../SavedCity/SavedCity';

import { getWeather, getImage } from '../../utils/constant';

function App() {
	const location = useLocation();
	const navigate = useNavigate();

	const [city, setCity] = useState("");
	const [description, setDescription] = useState("");
	const [temperature, setTemperature] = useState("");
	const [pressure, setPressure] = useState("");
	const [time, setTime] = useState("");

	const [list, setList] = useState(JSON.parse(localStorage.getItem('city') ?? '[]'));
	// const [startList, setList] = useState(JSON.parse(localStorage.getItem('city') ?? '[]'));
	const [first, setFirst] = useState(false);

	const [linkImage, setLinkImage] = useState("");
	const cat = "Облачно";

	const [formBlock, setFormBlock] = useState(false);
	useLayoutEffect(() => {
		// console.log("sfdsf");
		UpdateData();
	}, [])

	function UpdateData() {
		list.map((city) => {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
			axios.get(url)
				.then((res) => {
					const info = res.data;
					console.log(info);
					// температура
					city.temperature = Math.round((info.main.temp - 32) * 5 / 9);
					// описание 
					for (const i of info.weather) {
						city.description = getWeather(i.main);
					}
					// картинка 
					// city.image = getImage(cat);
					console.log(city)
				})
				.catch((err) => {
					alert("Город не найден!")
				})
		})
	}

	function searchLocation(data) {
		setFirst(true);
		setFormBlock(true);
		console.log(data)
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
		axios.get(url)
			.then((res) => {
				// setData(response.data)
				const info = res.data;
				console.log(info);
				setCity(data);
				// температура
				setTemperature(Math.round((info.main.temp - 32) * 5 / 9));
				// время заката
				let locTime = new Date(info.sys.sunset * 1000);
				let minut = locTime.getMinutes();
				let hour = locTime.getHours();
				let sunset = hour + ":" + minut;
				setTime(sunset);
				// описание 
				for (const i of info.weather) {
					setDescription(getWeather(i.main));
				}
				// давление 
				setPressure(Math.round(info.main.pressure * 0.75));
				// переход
				navigate("/save-city");
			})
			.catch((err) => {
				console.log(err);
				alert("Город не найден!")
			})
			.finally(() => setFormBlock(false));
	}
	function handleClick() {
		searchLocation("Ижевск");
	}

	function handleClickCity(data) {
		searchLocation(data);
	}

	function AddCity() {
		console.log("сохранение");
		let addCity = {
			city: city,
			temperature: temperature,
			description: description,
			// "../../images/Weather/Thunderstorm.svg"
			// image: "../../images/Weather/Thunderstorm.svg"
			// image: getImage(description)
		};
		const newList = [...list, addCity];
		setList(newList);
		localStorage.setItem("city", JSON.stringify(newList));
		console.log(newList);
	}

	function DeleteCity() {
		console.log("удаление");
		const newList = list.filter((film) => {
			return !film.city.includes(city);
		});
		console.log(newList)
		setList(newList);
		localStorage.setItem("city", JSON.stringify(newList));
	}

	return (
		<div className={`App 
		${location === "/save-city" ? "" : ""}
		`}>
			<Routes>
				<Route
					path="/"
					element={<Main
						onSearch={searchLocation}
						onClick={handleClick}
						onFound={handleClickCity}
						List={list}
						value={formBlock}
					/>}
				/>
				<Route
					path="/save-city"
					element={
						!first ?
							<Navigate to="/" />
							:
							<SavedCity
								city={city}
								description={description}
								temperature={temperature}
								pressure={pressure}
								time={time}
								onAdd={AddCity}
								onDelete={DeleteCity}
								List={list}
							/>}
				/>
			</Routes>
		</div>
	);
}

export default App;
