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
      groupedData: []
    }
  }

  // data related functions
  getData() {
    data.getDataFromAPI('https://restcountries.eu/rest/v1/all', (worldData) => {
      this.setState({trueData: worldData}, () => {
        this.groupData('region');
      });
    });
  }

  groupData(category) {
    const rearrangedData = data.groupBy(this.state.trueData, category);
    this.setState({groupedData: rearrangedData}, () => {
      console.log(rearrangedData);
    });
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
        <CountryList />
      </div>
    );
  }
}

export default WorldDataApp;
