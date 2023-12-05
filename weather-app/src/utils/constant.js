const getWeather = (data) => {
	if (data === "Thunderstorm") {
		return `Гроза`;
	} else if (data === "Drizzle") {
		return `Морось`;
	} else if (data === "Rain") {
		return `Дождь`;
	} else if (data === "Snow") {
		return `Снег`;
	} else if (data === "Mist") {
		return `Дымка`;
	} else if (data === "Smoke") {
		return `Смог`;
	} else if (data === "Haze") {
		return `Мгла`;
	} else if (data === "Dust") {
		return `Пыль`;
	} else if (data === "Fog") {
		return `Туман`;
	} else if (data === "Sand") {
		return `Песчано`;
	} else if (data === "Ash") {
		return `Пепел`;
	} else if (data === "Tornado") {
		return `Торнадо`;
	} else if (data === "Clear") {
		return `Чистое небо`;
	} else if (data === "Clouds") {
		return `Облачно`;
	}
};
const getImage = (data) => {
	console.log(data)
	if (data === "Thunderstorm") {
		return `../../images/Weather/Thunderstorm.svg`;
	} else if (data === "Drizzle") {
		return `../../images/Weather/Thunderstorm.svg`;
	} else if (data === "Rain") {
		return `../../images/Weather/Thunderstorm.svg`;
	} else if (data === "Snow") {
		return `../../images/Weather/Thunderstorm.svg`;
	} else if (data === "Mist") {
		return `../../images/Weather/Thunderstorm.svg`;
	} else if (data === "Smoke") {
		return `../../images/Weather/Thunderstorm.svg`;
	} else if (data === "Haze") {
		return `../../images/Weather/Thunderstorm.svg`;
	} else if (data === "Dust") {
		return `../../images/Weather/Thunderstorm.svg`;
	} else if (data === "Fog") {
		return `../../images/Weather/Thunderstorm.svg`;
	} else if (data === "Sand") {
		return `../../images/Weather/Thunderstorm.svg`;
	} else if (data === "Ash") {
		return `../../images/Weather/Thunderstorm.svg`;
	} else if (data === "Tornado") {
		return `../../images/Weather/Thunderstorm.svg`;
	} else if (data === "Clear") {
		return `../../images/Weather/Thunderstorm.svg`;
	} else if (data === "Облачно") {
		return "https://yandex.ru/images/search?pos=2&nl=1&img_url=https%3A%2F%2Fwww.myrtlebeach.com%2Fmedia%2Fapp%2FThinkstockPhotos-533645537.jpg&text=%D0%97%D0%B0%D0%B2%D1%82%D1%80%D0%B0%D0%BA&rpt=simage&lr=44&source=morda";
	}
};


export  {
	getWeather,
	getImage
};
