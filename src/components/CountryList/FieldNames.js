"use strict";
import React from 'react';
import Country from './Country.js';

class FieldNames extends React.Component{
  render() {
    return (
      <tr>
      <th> </th>
      {
        this.props.fields.map((field) => {
          return (
            <th key={field}> {field} </th>
          )
        })
      }
      </tr>
    )
  }
}

export default FieldNames;
