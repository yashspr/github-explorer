import React from 'react';

export function Spinner(props) {

	let style = {
		width: "50px",
		height: "50px",
		position: "absolute",
		top: "50%",
		left: "50%"
	};

	return (
		<div style={style}>
			<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="lds-rolling" viewBox="0 0 100 100" width="100%" height="100%"><circle cx="50" cy="50" fill="none" ng-attr-stroke="{{config.color}}" ng-attr-stroke-width="{{config.width}}" ng-attr-r="{{config.radius}}" ng-attr-stroke-dasharray="{{config.dasharray}}" stroke="#51CACC" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg>
		</div>
	)
}

export default Spinner
