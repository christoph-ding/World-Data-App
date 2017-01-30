"use strict";
import React from 'react';
import Title from './Title';
import FilterDataForm from './FilterDataForm/FilterDataForm';
import ViewForm from './ViewForm/ViewForm';
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
      selectedSorting: undefined
    }
  }

  // onclick actions passed to buttons
  regroup(groupField) {
    this.setState({selectedGrouping: groupField}, ()=>{
      console.log('grouping: ', this.state.selectedGrouping, ' sorting: ', this.state.selectedSorting);
      this.groupData();
    })
  }

  resort(sortField) {
    this.sortData(sortField);
  }

  filter(filterField, comparator, threshold) {
    this.filterData(filterField, comparator, threshold);
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

  componentWillMount() {
    this.getData();
  }

  // functions for manipulating the state data
  groupData() {
    let groupField = this.state.selectedGrouping;
    let sortField = this.state.selectedSorting;
    
    // by default, we group by region and sort by name
    if (typeof(groupField) === 'undefined') {
      groupField = this.props.defaults.grouping;
    }    

    if (typeof(this.state.selectedSorting) === 'undefined') {
      sortField = this.props.defaults.sorting;
    }

    console.log('group: ', groupField, ' sort: ', sortField);

    const rearrangedData = data.groupBy(this.state.formattedRawData, groupField, this.props.keyMapping);
    this.setState({groupedData: rearrangedData}, () => {
      // resort after changing the groups
      // this.sortData(sortField);
    });
  }
 
  getFields() {
    // I am assuming that the 'rows' in the dataset all have the same fields
    let sampleRow = this.state.formattedRawData[0];
    let fields = Object.keys(sampleRow);
    this.setState({dataFields: fields});      
  }

  sortData(sortField) {
    let newGroupedData = {};

    // sort the data within each level of the groupedData
    for (var level in this.state.groupedData) {
      let levelData = this.state.groupedData[level];
      let sortedLevelData = data.sortBy(levelData, sortField);
      newGroupedData[level] = sortedLevelData;
    }

    this.setState({groupedData: newGroupedData});
  }

  filterData(filterField, comparator, threshold) {
    // create the compare function using the user inputs to this filter
    const operatorTable = {
      '=': function(element) {return element[filterField] == threshold},
      '>': function(element) {return element[filterField] > threshold},
      '<': function(element) {return element[filterField] < threshold}
    }
    const relevantFilter = operatorTable[comparator];

    const newGroupedData = {};

    // apply the filter to the sorted data of the grouped data
    for (var level in this.state.groupedData) {
      let originalData = this.state.groupedData[level];
      let filteredData = originalData.filter(relevantFilter);
      newGroupedData[level] = filteredData;
    }

    this.setState({groupedData: newGroupedData});
  }


  render(){
    return (
      <div>
        <Title />
        <FilterDataForm actions={{regroup: this.regroup.bind(this), resort: this.resort.bind(this), filter: this.filter.bind(this)}} fields={this.state.dataFields} />
        <CountryList countryData={this.state.groupedData} fields={this.state.dataFields} id={'Country Name'}/>
      </div>
    );
  }
}

export default WorldDataApp;
