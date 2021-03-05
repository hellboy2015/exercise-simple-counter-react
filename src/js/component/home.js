import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { CardDigit } from "./cardDigit.js";
//create your first component

let firstDigit = 0;
let secondDigit = 0;
let thirdDigit = 0;
let fourthDigit = 0;

export function Home() {
	if (firstDigit < 10) {
		firstDigit++;
	}
	if (firstDigit === 10) {
		secondDigit++;
		firstDigit = 0;
	}
	if (secondDigit === 10) {
		thirdDigit++;
		secondDigit = 0;
	}
	if (thirdDigit === 10) {
		fourthDigit++;
		thirdDigit = 0;
	}
	if (fourthDigit === 10) {
		firstDigit = 0;
		secondDigit = 0;
		thirdDigit = 0;
		fourthDigit = 0;
	}
	return (
		<div
			className="container justify-content-center text-center mt-3 pt-2 bg-dark row"
			id="timerContainer">
			<div className="col-1 h1 display-5 bg-secondary text-white mx-1 rounded">
				<i className="far fa-clock"></i>
			</div>
			<CardDigit timerDigit={fourthDigit} />
			<CardDigit timerDigit={thirdDigit} />
			<CardDigit timerDigit={secondDigit} />
			<CardDigit timerDigit={firstDigit} />
		</div>
	);
}
