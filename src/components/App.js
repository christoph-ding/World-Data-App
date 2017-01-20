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
      groupedData: {}
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
      this.sortData('population');
      console.log(this.state.groupedData['Asia']);
    });
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

  // componentDidMount() {
  //   fetch('https://restcountries.eu/rest/v1/all')
  //   .then((res) => {
  //     res.json()
  //         .then((worldData) => {
  //           this.setState({trueData: worldData}, () => {
  //             console.log(this.state.trueData);
  //           })            
  //         })
  //   })
  // }

  

  render(){
    return (
      <div>
        <Title />
        <FilterDataForm />
        <ViewForm />
        <CountryList input={this.state.trueData}/>
      </div>
    );
  }

  // render(){
  //   return (
  //     <div>
  //       <Title />
  //       <FilterDataForm />
  //       <ViewForm />
  //     </div>
  //   );
  // }
}

export default WorldDataApp;
