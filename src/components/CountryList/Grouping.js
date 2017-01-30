"use strict";
import React from 'react';
import Country from './Country.js';

class Grouping extends React.Component{

  render() {
    return (
      <tbody> 
          <td> {this.props.level} </td>
          {
            this.props.countryList.map((country) => {
              return (
                <Country key={country.Name} id={'name'} action={this.expandList} countryData={country}/>
              )
            })
          }
      </tbody>
    )
  };x
}

export default Grouping;
