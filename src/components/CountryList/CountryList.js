"use strict";
import React from 'react';
import Grouping from './Grouping.js';

class CountryList extends React.Component{

  render() {
    // a level is a possible answer for the group chosen
    const levels = Object.keys(this.props.countryData); 
    return (
      <div>
      {
        levels.map((level) => {          
          let levelCountries = this.props.countryData[level];        
          return (
            <Grouping level={level} countryList={levelCountries}/>
          );
        })
      }
      </div>
    )
  }
}

export default CountryList;
