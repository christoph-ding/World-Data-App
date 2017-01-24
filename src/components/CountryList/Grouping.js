"use strict";
import React from 'react';
import Country from './Country.js';

class Grouping extends React.Component{

  render() {
    return (
      <div>
        <h2>{this.props.level}</h2>
          <table>
          <tbody>            
            {
              this.props.countryList.map((country) => {
                return (
                  <Country key={country.name} id={'name'} action={this.expandList} countryData={country}/>
                )
              })
            }            
          </tbody>
        </table>
      </div>
    )
  };
}

export default Grouping;
