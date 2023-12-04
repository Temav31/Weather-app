// импорт стилей
import "./SearchForm.css";
import React, { useEffect, useState } from "react";

const SearchForm = (props) => {
	const {
		onSearch
	} = props;

	const standartName = /^[А-ЯЁ][а-яё]+(-[А-ЯЁ][а-яё]+)?$/;
	const messageEmail = "Неправильно введен город!"
	const [name, setName] = useState("");
	const [errror, setError] = useState("");
	const [valid, setValid] = useState(false);

	function handleChange(event) {
		setError("");
		setValid(true)
		const target = event.target;
		const passwValue = target.value;
		setName(passwValue);
		if (target.validity.valid) {
			if (!standartName.test(passwValue)) {
				setError(messageEmail);
				setValid(false);
			}
		} else {
			setError(target.validationMessage);
		}
	};

	function handleSubmit(e) {
		e.preventDefault();
		if(valid){
			onSearch(name);
		} else {
			alert("Город не найден!");
		}
	}

	return (
		<div className="search-form" >
			<form
				className="search-form__form"
				name="searchMovies"
				onSubmit={handleSubmit}
			>
				<input
					className="search-form__input"
					placeholder="Укажите город"
					type="text"
					id="name-city"
					name="city"
					value={name}
					onChange={handleChange}
				/>
				<span className='search-form__error'>
					{errror}
				</span>
			</form>
		</div>
	);
};
export default SearchForm;
