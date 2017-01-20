"use strict";
import React from 'react';
import Grouping from './Grouping.js';

class CountryList extends React.Component{

  render() {
    return (
      <div>
      <Grouping />
      <ul> 
        {
          this.props.input.map((elem) => {
            console.log(elem)
            return (<li> {elem.name} </li>)
          })
        }
      </ul>
      </div>
    )
  }
}

export default CountryList;
