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
  }

  getData() {
    getDataFromAPI('https://restcountries.eu/rest/v1/all');
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
