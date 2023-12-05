import Thunderstorm from "../images/Weather/Thunderstorm.svg";
import Drizzle from "../images/Weather/Drizzle.svg";
import Rain from "../images/Weather/Rain.svg";
import Snow from "../images/Weather/Snow.svg";
import Smoke from "../images/Weather/Smoke.svg";
import Dust from "../images/Weather/Dust.svg";
import Tornado from "../images/Weather/Tornado.svg";
import Clear from "../images/Weather/Clear.svg";
import Clouds from "../images/Weather/Clouds.svg";
import Squall from "../images/Weather/Squall.svg";

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
	} else if (data === "Squall") {
		return `Ветрено`;
	}
};
const getImage = (data) => {
	console.log(data)
	if (data === "Гроза") {
		return Thunderstorm;
	} else if (data === "Морось") {
		return Drizzle;
	} else if (data === "Дождь") {
		return Rain;
	} else if (data === "Снег") {
		return Snow;
	} else if (data === "Дымка") {
		return Smoke;
	} else if (data === "Смог") {
		return Smoke;
	} else if (data === "Мгла") {
		return Smoke;
	} else if (data === "Пыль") {
		return Dust;
	} else if (data === "Туман") {
		return Smoke;
	} else if (data === "Песчано") {
		return Dust;
	} else if (data === "Пепел") {
		return Dust;
	} else if (data === "Торнадо") {
		return Tornado;
	} else if (data === "Чистое небо") {
		return Clear;
	} else if (data === "Облачно") {
		return Clouds;
	} else if (data === "Ветрено") {
		return Squall;
	}
};


export  {
	getWeather,
	getImage
};
