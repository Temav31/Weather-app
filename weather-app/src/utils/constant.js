const getWeather = (data) => {
	if (data == "Thunderstorm") {
		return `Гроза`;
	} else if (data == "Drizzle") {
		return `Морось`;
	} else if (data == "Rain") {
		return `Дождь`;
	} else if (data == "Snow") {
		return `Снег`;
	} else if (data == "Mist") {
		return `Дымка`;
	} else if (data == "Smoke") {
		return `Смог`;
	} else if (data == "Haze") {
		return `Мгла`;
	} else if (data == "Dust") {
		return `Пыль`;
	} else if (data == "Fog") {
		return `Туман`;
	} else if (data == "Sand") {
		return `Песчано`;
	} else if (data == "Ash") {
		return `Пепел`;
	} else if (data == "Tornado") {
		return `Торнадо`;
	} else if (data == "Clear") {
		return `Чистое небо`;
	} else if (data == "Clouds") {
		return `Облачно`;
	}
};

export  {
	getWeather
};
