"use strict";
import React from 'react';
import GroupByForm from './GroupBy';
import SortByForm from './SortBy';

class FilterDataForm extends React.Component{
	render() {
		return (
			<div>
				<GroupByForm />
				<SortByForm />
				<h3> FilterBy </h3>
				<h3> Refresh Data </h3>
			</div>
		);
	}
}

export default FilterDataForm;
