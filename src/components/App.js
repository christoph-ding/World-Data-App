"use strict";
import React from 'react';
import Title from './Title';
import FilterDataForm from './FilterDataForm/FilterDataForm';
import ViewForm from './ViewForm/ViewForm';
import CountryList from './CountryList/CountryList';

import getDataFromAPI from './../getData';

class WorldDataApp extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      trueData : []
    }
  }

  getData() {
    getDataFromAPI('https://restcountries.eu/rest/v1/all', (worldData) => {
      this.setState({trueData: worldData});
    });
  }

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
