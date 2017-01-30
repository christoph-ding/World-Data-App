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
      selectedFilterField: undefined,
      selectedOperator: undefined,
      filterThreshold: undefined
    }
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
        <ChangeOrderForm title="Group By" action={this.props.actions.regroup} fields={this.props.fields}/>
        <ChangeOrderForm title="Sort By" action={this.props.actions.resort} fields={this.props.fields}/>        
        <FilterByForm title="Filter By" action={{updateFilterField: this.updateFilterField.bind(this), updateOperator: this.updateOperator.bind(this), updateThreshold: this.updateThreshold.bind(this)}} fields={this.props.fields}/>
      </div>
    );
  }
}

export default FilterDataForm;
