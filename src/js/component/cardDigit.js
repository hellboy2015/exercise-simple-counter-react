import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function CardDigit(props) {
	let secondsCounter;
	return (
		<div className="col-1 h1 bg-secondary text-white mx-1 rounded">
			{props.timerDigit}
		</div>
	);
}

CardDigit.propTypes = {
	timerDigit: PropTypes.number
};
