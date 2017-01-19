"use strict";
import React from 'react';
import Title from './Title';
import FilterDataForm from './FilterDataForm/FilterDataForm';
import ViewForm from './ViewForm/ViewForm';
import CountryList from './CountryList/CountryList';

class WorldDataApp extends React.Component{
  render() {
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
