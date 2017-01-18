"use strict";
import React from 'react';
import Country from './Country.js';

class Grouping extends React.Component{
	render() {
		return (
			<div>
				<h2> I'm a group </h2>
				<Country />
			</div>
		)
	};
}

export default Grouping;
