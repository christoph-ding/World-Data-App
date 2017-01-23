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
      trueData : [],      
      groupedData: {},
      dataFields: []
    }

    this.keyMapping = {'': 'not available'}
  }

  // onclick actions passed to buttons
  regroup(groupField, sortField) {
    this.groupData(groupField, sortField);
  }

  resort(sortField) {
    this.sortData(sortField);
  }

  filter(filterField, comparator, threshold) {
    this.filterData(filterField, comparator, threshold);
  }

  // data related functions
  getData() {
    data.getDataFromAPI('https://restcountries.eu/rest/v1/all', (originalData) => {
      this.setState({trueData: originalData}, () => {
          this.groupData();
          // I am assuming that the 'rows' in the dataset all have the same fields          
          this.getFields();          
      })      
    })
  }

  getFields() {
    // I am assuming that the 'rows' in the dataset all have the same fields
    let sampleRow = this.state.trueData[0];
    let fields = data.determineGroupingFields(sampleRow);
    this.setState({dataFields: fields});      
  }

  groupData(groupField, sortField) {
    // by default, we group by region and sort by name
    if (typeof(groupField) === 'undefined') {
      groupField = 'region';
    }    

    if (typeof(sortField) === 'undefined') {
      sortField = 'name';
    }

    const rearrangedData = data.groupBy(this.state.trueData, groupField, this.keyMapping);
    this.setState({groupedData: rearrangedData}, () => {
      // resort after changing the groups
      this.sortData(sortField);
    });
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
    const operatorTable = {
      '=': function(element) {return element == threshold},
      '>': function(element) {return element > threshold},
      '<': function(element) {return element < threshold}
    }

    const relevantFilter = () => {
      return operatorTable[comparator];
    }

    console.log(relevantFilter());

  }

  // life-cycles and mounts
  componentDidMount() {
    this.getData();
  }

  render(){
    return (
      <div>
        <Title />
        <FilterDataForm actions={{regroup: this.regroup.bind(this), resort: this.resort.bind(this), filter: this.filter.bind(this)}} fields={this.state.dataFields} />
        <ViewForm />
        <CountryList countryData={this.state.groupedData}/>
      </div>
    );
  }
}

export default WorldDataApp;
