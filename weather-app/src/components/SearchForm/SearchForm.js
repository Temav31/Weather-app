// импорт стилей
import "./SearchForm.css";
import React, { useEffect, useState } from "react";
// изображение
import Logo from "../../images/logo.svg";

const SearchForm = (props) => {
	const [city, setCity] = useState("Москва");

	// const {
	// 	onSearch,
	// 	valueCheckbox,
	// 	onCheckboxChange,
	// 	searchValue,
	// } = props;


	// const value = true;
	// место
	return (
		<div className="search-form" >
			<form
				className="search-form__form"
				name="searchMovies"
			// onSubmit={handleSubmit}
			>

				<input
					className="search-form__input"
					placeholder="Укажите город"
					// defaultValue={text}
					// onChange={handleChange}
					type='name'
					value={city}
				/>

			</form>
		</div>
	);
};
export default SearchForm;
