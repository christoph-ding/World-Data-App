"use strict";
import React from 'react';
import Country from './Country.js';

class Grouping extends React.Component{

  render() {
    return (
      <tbody>
        <tr><td colSpan={this.props.spanAll} className="grouping-row"> {this.props.level} </td></tr>
        {
          this.props.countryList.map((country) => {
            return (
              <Country key={country.Name} id={this.props.id} action={this.expandList} countryData={country}/>
            )
          })
        }
      </tbody>
    )
  };x
}

export default Grouping;
