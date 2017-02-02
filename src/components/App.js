"use strict";
import React from 'react';
import Title from './Title';
import FilterDataForm from './FilterDataForm/FilterDataForm';
import CountryList from './CountryList/CountryList';

import * as data from './../getData';

class WorldDataApp extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      // formattedRawData is the 'true' data, but with only the fields specified by the user
      formattedRawData : [],
      groupedData: {},
      dataFields: [],
      // states related to the filters and grouping options chosen by the user
      selectedGrouping: undefined,
      selectedSorting: undefined,
      selectedFilterField: undefined,
      selectedOperator: undefined,
      filterThreshold: ''
    }

    this.actions = {
      regroup: this.regroup.bind(this),
      resort: this.resort.bind(this), 
      updateFilterField: this.updateFilterField.bind(this),
      updateOperator: this.updateOperator.bind(this),
      updateThreshold: this.updateThreshold.bind(this)
    }
  }

  // get data upon initializing the app 
  getData() {
    data.getDataFromAPI(this.props.apiEndPoint, this.props.relevantFields, (originalData) => {
      this.setState({formattedRawData: originalData}, () => {
        this.groupData();
        this.getFields();
      })      
    });
  }

  componentDidMount() {
    this.getData();
  }

  getFields() {
    // I am assuming that the 'rows' in the dataset all have the same fields
    let sampleRow = this.state.formattedRawData[0];
    let fields = Object.keys(sampleRow);
    this.setState({dataFields: fields});      
  }

  // functions for manipulating the data in state
  groupData() {
    let groupField = this.state.selectedGrouping;
    let sortField = this.state.selectedSorting;
    
    // by default, we group by region and sort by name
    if (typeof(groupField) === 'undefined') {
      groupField = this.props.defaults.grouping;
    }    

    console.log('group: ', groupField);

    const rearrangedData = data.groupBy(this.state.formattedRawData, groupField, this.props.keyMapping);
    this.setState({groupedData: rearrangedData}, () => {
      // resort after changing the groups
      // this.sortData(sortField);
    });
  }

  sortData() {    
    let newGroupedData = {};    
    let sortField = this.state.selectedSorting;

    if (typeof(sortField) === 'undefined') {
      sortField = this.props.defaults.sorting;
    }

    console.log('sort: ', sortField);    

    // sort the data within each level of the groupedData
    for (var level in this.state.groupedData) {
      let levelData = this.state.groupedData[level];
      let sortedLevelData = data.sortBy(levelData, sortField);
      newGroupedData[level] = sortedLevelData;
    }

    this.setState({groupedData: newGroupedData});
  }

  filterData() {
    // create the compare function using the user inputs to this filter
    const selectedFilterField = this.state.selectedFilterField;
    const threshold = this.state.filterThreshold;

    const operatorTable = {
      '=': function(element) {return element[selectedFilterField] == threshold},
      '>': function(element) {return element[selectedFilterField] > threshold},
      '<': function(element) {return element[selectedFilterField] < threshold}
    }

    const relevantFilter = operatorTable[this.state.selectedOperator];
    const newGroupedData = {};

    // apply the filter to the sorted data of the grouped data
    for (var level in this.state.groupedData) {
      let originalData = this.state.groupedData[level];
      let filteredData = originalData.filter(relevantFilter);
      newGroupedData[level] = filteredData;
    }

    this.setState({groupedData: newGroupedData});
  }

  // filter, sort, grouping actions passed to filter form
  regroup(groupField) {
    this.setState({selectedGrouping: groupField}, ()=>{
      this.groupData();
    });
  }

  resort(sortField) {
    this.setState({selectedSorting: sortField}, ()=>{
      this.sortData();
    });
  }

  updateFilterField(newField) {
    this.setState({selectedFilterField: newField}, ()=>{
      if (this.completeFilterExists()) {
        this.filterData();    
      }
    });
  }

  updateOperator(newOperator) {    
    this.setState({selectedOperator: newOperator}, ()=>{
      if (this.completeFilterExists()) {
        this.filterData();    
      }
    });
  }

  updateThreshold(newThreshold) {
    this.setState({filterThreshold: newThreshold}, ()=>{
      if (this.completeFilterExists()) {
        this.filterData();    
      }
    });
  }

  // only filter if all the necceary parameters are supplied
  completeFilterExists() {
    console.log('field: ', this.state.selectedFilterField, ' operator: ', this.state.selectedOperator, ' filterThreshold: ', this.state.filterThreshold);
    return (this.state.selectedFilterField !== undefined && this.state.selectedOperator !== undefined && this.state.filterThreshold !== '');
  }

  // presentation  
  render(){
    return (
      <div>
        <Title />
        <FilterDataForm actions={this.actions} fields={this.state.dataFields} />
        <CountryList countryData={this.state.groupedData} fields={this.state.dataFields} id={'Country Name'}/>
      </div>
    );
  }
}

export default WorldDataApp;
