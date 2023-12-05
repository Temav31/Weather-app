import React from 'react';
// import Logo from "../../images/WeatherSprite.svg"
import Logo from "../../images/Icon.svg"

const Icon = ({ id, className }) => (
	<svg className={className} >
		<use href={`${Logo}#${id}`}></use>
	</svg >
);
export default Icon;
// 	<svg class="icon">
// 	<use xlink:href="#Arrow"></use>
//   </svg><svg class="icon">
// 	<use xlink:href="#barometer"></use>
//   </svg><svg class="icon">
// 	<use xlink:href="#big_left"></use>
//   </svg><svg class="icon">
// 	<use xlink:href="#Bookmark"></use>
//   </svg><svg class="icon">
// 	<use xlink:href="#Bookmark_active"></use>
//   </svg>
