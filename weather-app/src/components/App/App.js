import './App.css';
import { useEffect, useState } from 'react';
import {
	Route,
	Routes,
	useLocation,
	useNavigate
} from 'react-router-dom';
import axios from 'axios'
// компоненты
import Main from '../Main/Main';
import SavedCity from '../SavedCity/SavedCity';

import { getWeather } from '../../utils/constant';
// import SuccessPopup from '../SuccessPopup/SuccessPopup';

// api
// import MainApi from "../../utils/MainApi"

function App() {
	const location = useLocation();
	const navigate = useNavigate();

	const [city, setCity] = useState("Ижевск");
	const [description, setDescription] = useState("Облачно с прояснениями");
	const [temperature, setTemperature] = useState("-13°");
	const [pressure, setPressure] = useState("756 мм рт. ст.");
	const [time, setTime] = useState();

	const [nameCity, setNameCity] = useState('Ижевск')


	function searchLocation(data) {
		setNameCity(data);
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
		axios.get(url)
			.then((res) => {
				// setData(response.data)
				const info = res.data;
				console.log(info);
				setCity(data);
				// температура
				setTemperature(Math.round((info.main.temp -32) * 5 / 9));
				// setTemperature(info.main.temp);
				// время заката
				let locTime = new Date(info.sys.sunset * 1000);
				let minut = locTime.getMinutes();
				let hour = locTime.getHours();
				let sunset = hour + ":" + minut;
				// console.log(sunset)
				setTime(sunset);
				// описание 
				for(const i of info.weather) {
					setDescription(getWeather(i.main));
				}
				// давление 
				setPressure(Math.round(info.main.pressure * 0.75));
				// console.log(info.weather.1.main)
				// setDescription(getWeather(info.weather.main))
				// переход
				navigate("/save-city");
			})
			.catch((err) => {
				console.log(err);
			});
		// setLocation('')
		// }
	}
	function handleclick() {
		setNameCity("Ижевск");
		searchLocation(nameCity);
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
						onClick={handleclick}
					/>}
				/>
				<Route
					path="/save-city"
					element={<SavedCity
						city={city}
						description={description}
						temperature={temperature}
						pressure={pressure}
						time={time}
					/>}
				/>
			</Routes>
		</div>
	);
}

export default App;
