"use strict";
import React from 'react';
import Country from './Country.js';

class Grouping extends React.Component{
  render() {
    return (
      <div>
        <h2> {this.props.level} </h2>
        <h3> {this.props.countryList[0].name} </h3>
      </div>
    )
  };
}

export default Grouping;
