'use strict';
import React from 'react';
import Title from './Title';
import FilterDataForm from './FilterDataForm/FilterDataForm';
import CountryList from './CountryList/CountryList';

import * as data from './../getData';

class WorldDataApp extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      // formattedRawData is the 'true' JSON data from the api, but with only
      // the fields specified by the user
      formattedRawData : [],
      groupedData: {},
      dataFields: [],
      // states related to the filters and grouping options chosen by the user
      selectedGrouping: undefined,
      selectedSorting: undefined,
      selectedFilterField: undefined,
      selectedOperator: undefined,
      filterThreshold: ''
    };

    // this is not neccesary, but makes it less verbose to pass functions to
    // child components
    this.actions = {
      regroup: this.regroup.bind(this),
      resort: this.resort.bind(this),
      updateFilterField: this.updateFilterField.bind(this),
      updateOperator: this.updateOperator.bind(this),
      updateThreshold: this.updateThreshold.bind(this)
    };
  }

  // get data upon initializing the app
  getData() {
    data.getDataFromAPI(this.props.apiEndPoint, this.props.relevantFields,
      (originalData) => {
        this.setState({formattedRawData: originalData}, () => {
          this.groupData();
          this.getFields();
        });
      }
    );
  }

  componentDidMount() {
    this.getData();
  }

  // get a list of fields from the data to pass to child components that render
  // filter options
  getFields() {
    // I am assuming that the 'rows' in the dataset all have the same fields
    let sampleRow = this.state.formattedRawData[0];
    let fields = Object.keys(sampleRow);
    this.setState({dataFields: fields});
  }

  // functions for manipulating the data in state
  groupData() {
    let groupByField = this.state.selectedGrouping;
    
    // by default, we group by region and sort by name
    if (typeof(groupByField) === 'undefined') {
      groupByField = this.props.defaults.grouping;
    }

    const groupedByFieldData = data.groupBy(this.state.formattedRawData,
                                            groupByField);
    this.setState({groupedData: groupedByFieldData}, () => {
      // resort after changing the groups
      this.sortData();
    });
  }

  sortData() {
    let sortedGroupedData = {};
    let sortOnField = this.state.selectedSorting;

    if (typeof(sortOnField) === 'undefined') {
      sortOnField = this.props.defaults.sorting;
    }

    // sort the data within each level of groupedData
    for (var level in this.state.groupedData) {
      let levelData = this.state.groupedData[level];
      let sortedLevelData = data.sortBy(levelData, sortOnField);
      sortedGroupedData[level] = sortedLevelData;
    }

    this.setState({groupedData: sortedGroupedData});
  }

  filterData() {
    // create the compare function using the user inputs to filter
    const selectedFilterField = this.state.selectedFilterField;
    const threshold = this.state.filterThreshold;

    const operatorTable = {
      '=': function(element) {
        return element[selectedFilterField] == threshold;},
      '>': function(element) {
        return element[selectedFilterField] > threshold;},
      '<': function(element) {
        return element[selectedFilterField] < threshold;}
    };

    const relevantFilter = operatorTable[this.state.selectedOperator];
    const filteredGroupedData = {};

    // apply the filter to the sorted data of the grouped data
    for (var level in this.state.groupedData) {
      let originalData = this.state.groupedData[level];
      let filteredData = originalData.filter(relevantFilter);
      filteredGroupedData[level] = filteredData;
    }

    this.setState({groupedData: filteredGroupedData});
  }

  // these functions expose this component's data to child elements
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
    this.setState({selectedFilterField: newField});
  }

  updateOperator(newOperator) {
    this.setState({selectedOperator: newOperator});
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
    return (this.state.selectedFilterField !== undefined &&
            this.state.selectedOperator !== undefined &&
            this.state.filterThreshold !== '');
  }

  // presentation
  render(){
    return (
      <div>
        <Title />
        <FilterDataForm actions={this.actions} fields={this.state.dataFields} />
        <CountryList countryData={this.state.groupedData}
         fields={this.state.dataFields} id={'Country Name'}/>
      </div>
    );
  }
}

export default WorldDataApp;
