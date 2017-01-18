"use strict";
import React from 'react';
import GridViewToggle from './GridView';
import ListViewToggle from './ListView';

class ViewForm extends React.Component{
	render() {
		return (
			<div>
				<GridViewToggle />
				<ListViewToggle />
			</div>
		)
	}
}

export default ViewForm;
