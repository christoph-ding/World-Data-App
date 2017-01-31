"use strict";
import React from 'react';
import GroupByForm from './GroupBy';
import SortByForm from './SortBy';
import FilterByForm from './FilterBy';
import RefreshDataButton from './Refresh';
import ChangeOrderForm from './changeDataOrdering'

class FilterDataForm extends React.Component{
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="card filter-box">
        <ChangeOrderForm title="Group By" action={this.props.actions.regroup} fields={this.props.fields}/>
        <ChangeOrderForm title="Sort By" action={this.props.actions.resort} fields={this.props.fields}/>        
        <FilterByForm title="Filter By" action={{updateFilterField: this.props.actions.updateFilterField, updateOperator: this.props.actions.updateOperator, updateThreshold: this.props.actions.updateThreshold}} fields={this.props.fields}/>
      </div>
    );
  }
}

export default FilterDataForm;
