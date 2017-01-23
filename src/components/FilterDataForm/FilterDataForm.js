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
      selectedFilterField: undefined,
      selectedOperator: undefined,
      filterThreshold: undefined
    }
  }

  updateGrouping(newGrouping) {
    this.setState({selectedGrouping: newGrouping}, () => {      
      this.props.actions.regroup(this.state.selectedGrouping, this.state.selectedSorting);
    });
  }

  updatingSorting(newSort) {
    this.setState({selectedSorting: newSort}, () => {      
      this.props.actions.resort(this.state.selectedSorting);
    });
  }

  updateFilterField(newField) {
    this.setState({selectedFilterField: newField});      
  }

  updateOperator(newOperator) {    
    this.setState({selectedOperator: newOperator});      
  }

  // only filter if all the necceary parameters are supplied
  completeFilterExists() {
    console.log('field: ', this.state.selectedFilterField, ' operator: ', this.state.selectedOperator, ' filterThreshold: ', this.state.filterThreshold);
    return (this.state.selectedFilterField !== undefined && this.state.selectedOperator !== undefined && this.state.filterThreshold !== '');
  }

  updateThreshold(newThreshold) {
    this.setState({filterThreshold: newThreshold}, () => {
      if (this.completeFilterExists()) {
        this.props.actions.filter(this.state.selectedFilterField, this.state.selectedOperator, this.state.filterThreshold);
      }
    });   
  }

  render () {
    return (
      <div>
        <ChangeOrderForm title="Group By" action={this.updateGrouping.bind(this)} fields={this.props.fields}/>
        <ChangeOrderForm title="Sort By" action={this.updatingSorting.bind(this)} fields={this.props.fields}/>        
        <FilterByForm title="Filter By" action={{updateFilterField: this.updateFilterField.bind(this), updateOperator: this.updateOperator.bind(this), updateThreshold: this.updateThreshold.bind(this)}} fields={this.props.fields}/>
        <RefreshDataButton />
      </div>
    );
  }
}

export default FilterDataForm;
