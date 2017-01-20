"use strict";
import React from 'react';
import Country from './Country.js';

class Grouping extends React.Component{
  render() {
    return (
      <div>
        <h2> {this.props.level} </h2>        
        {
          this.props.countryList.map((country) => {
            return (
              <Country countryData={country}/>
            )
          })
        }
      </div>
    )
  };
}

export default Grouping;
