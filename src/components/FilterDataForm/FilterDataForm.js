"use strict";
import React from 'react';
import GroupByForm from './GroupBy';
import SortByForm from './SortBy';
import FilterByForm from './FilterBy';

class FilterDataForm extends React.Component{
	render() {
		return (
			<div>
				<GroupByForm />
				<SortByForm />
				<FilterByForm />
				<h3> Refresh Data </h3>
			</div>
		);
	}
}

export default FilterDataForm;
