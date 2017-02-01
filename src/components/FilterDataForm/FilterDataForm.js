"use strict";
import React from 'react';
import FilterByForm from './FilterBy';
import ChangeOrderForm from './changeDataOrdering'

class FilterDataForm extends React.Component{
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="cover-image filter-image">
      <div className="card filter-box">
        <ChangeOrderForm className="group-by" title="Group By" action={this.props.actions.regroup} fields={this.props.fields}/>
        <ChangeOrderForm title="Sort By" action={this.props.actions.resort} fields={this.props.fields}/>        
        <FilterByForm title="Filter By" action={{updateFilterField: this.props.actions.updateFilterField, updateOperator: this.props.actions.updateOperator, updateThreshold: this.props.actions.updateThreshold}} fields={this.props.fields}/>
      </div>
      </div>
    );
  }
}

export default FilterDataForm;
