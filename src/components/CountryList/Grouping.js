'use strict';
import React from 'react';
import Country from './Country.js';

class Grouping extends React.Component{

  render() {
    return (
      <tbody>
        <tr><td className='group-level'
            colSpan={this.props.spanAll}> {this.props.level} </td></tr>
        {
          this.props.countryList.map((country) => {
            return (
              <Country key={country[this.props.id]}
               id={this.props.id} countryData={country}/>
            );
          })
        }
      </tbody>
    );
  }
}

export default Grouping;
