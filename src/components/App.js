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
      groupedData: {}
    }
  }

  // onclick actions passed to buttons
  regroup(category) {
    console.log('regrouping');
  }

  // data related functions
  getData() {
    data.getDataFromAPI('https://restcountries.eu/rest/v1/all', (originalData) => {
      // by default, we group by region and sort by name
      this.setState({trueData: originalData}, () => {
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
        <FilterDataForm actions={{regroup: this.regroup}}/>
        <ViewForm />
        <CountryList countryData={this.state.groupedData}/>
      </div>
    );
  }
}

export default WorldDataApp;
