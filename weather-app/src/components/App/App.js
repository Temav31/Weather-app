import './App.css';
// import { useEffect, useState } from 'react';
import {
	Route,
	Routes,
	useLocation
} from 'react-router-dom';
// компоненты
import Main from '../Main/Main';
import SavedCity from '../SavedCity/SavedCity';
// import SuccessPopup from '../SuccessPopup/SuccessPopup';

// api
// import MainApi from "../../utils/MainApi"

function App() {
	const location = useLocation();


	return (
		<div className={`App 
		${location === "/save-city" ? "" : ""}
		`}>
			<Routes>
				<Route
					path="/"
					element={<Main
					// onOpen={handleOpen}
					/>}
				/>
				<Route
					path="/save-city"
					element={<SavedCity
					// onOpen={handleOpen}
					/>}
				/>
			</Routes>
		</div>
	);
}

export default App;
