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
      // trueData : [{'region': 'asgard'}],
      trueData : [],      
      groupedData: {'hey':'yo'}
    }
  }

  // data related functions
  getData() {
    data.getDataFromAPI('https://restcountries.eu/rest/v1/all', (worldData) => {
      // set the true raw data
      let trueData = worldData;
      
      // by default, we group by region and sort by name
      this.setState({trueData: worldData}, () => {
          // by default we will group by region
          this.groupData('region');
      });
    })
  }

  groupData(category) {
    const rearrangedData = data.groupBy(this.state.trueData, category);
    this.setState({groupedData: rearrangedData});
  }

  sortData(category) {
    for (var level in this.state.groupedData) {
      let levelData = this.state.groupedData[level];
      let sortedLevelData = data.sortBy(levelData, category);  
    }
  }

  // life-cycles and mounts
  componentDidMount() {
    this.getData();
  }

  render(){
    return (
      <div>
        <Title />
        <FilterDataForm />
        <ViewForm />
        <CountryList input={this.state.groupedData}/>
      </div>
    );
  }
}

export default WorldDataApp;
