"use strict";
import React from 'react';
import GroupByForm from './GroupBy';
import SortByForm from './SortBy';
import FilterByForm from './FilterBy';
import RefreshDataButton from './Refresh';

class FilterDataForm extends React.Component{
  render () {
    return (
      <div>
        <GroupByForm action={this.props.actions.regroup} fields={this.props.fields}/>
        <SortByForm />
        <FilterByForm />
        <RefreshDataButton />
      </div>
    );
  }
}

export default FilterDataForm;
