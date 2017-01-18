"use strict";
import React from 'react';
import GroupByForm from './GroupBy';

class FilterDataForm extends React.Component{
	render() {
		return (
			<div>
				<GroupByForm />
				<h3> SortBy </h3>
				<h3> FilterBy </h3>
				<h3> Refresh Data </h3>
			</div>
		);
	}
}

export default FilterDataForm;
