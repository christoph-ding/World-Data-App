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
    this.state = {
      selectedGrouping: undefined,
      selectedSorting: undefined,
      selectedFilterField: undefined
    }
  }

  updateGrouping(newGrouping) {
    this.setState({selectedGrouping: newGrouping}, () => {      
      this.props.actions.regroup(this.state.selectedGrouping, this.state.selectedSorting);
    })
  }

  updatingSorting(newSort) {
    this.setState({selectedSorting: newSort}, () => {      
      this.props.actions.resort(this.state.selectedSorting);
    })
  }

  updateFilterField(newField) {
    console.log(newField);
    this.setState({selectedFilterField: newField}, () => {
      this.props.actions.filter(this.state.selectedFilterField, "greater than");
    })
  }

  render () {
    return (
      <div>
        <ChangeOrderForm title="Group By" action={this.updateGrouping.bind(this)} fields={this.props.fields}/>
        <ChangeOrderForm title="Sort By" action={this.updatingSorting.bind(this)} fields={this.props.fields}/>        
        <FilterByForm title="Filter By" action={this.updateFilterField.bind(this)} fields={this.props.fields}/>
        <RefreshDataButton />
      </div>
    );
  }
}

export default FilterDataForm;
