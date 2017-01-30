"use strict";
import React from 'react';
import Grouping from './Grouping.js';
import FieldNames from './FieldNames.js';

class CountryList extends React.Component{

  render() {
    // a level is a possible answer for the group chosen
    const levels = Object.keys(this.props.countryData); 
      return (
        <table>
          <tbody>
            <FieldNames fields={this.props.fields}/>
            {
              levels.map((level) => {          
                let levelCountries = this.props.countryData[level];        
                return (
                  <Grouping key={level} level={level} countryList={levelCountries}/>
                );
              })
            }
          </tbody>
        </table>
      )
  }
}

export default CountryList;
