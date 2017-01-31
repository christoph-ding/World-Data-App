"use strict";
import React from 'react';
import Country from './Country.js';

class FieldNames extends React.Component{
  render() {
    return (
      <tr>
      {
        this.props.fields.map((field) => {
            return (
            <th className="column-headers" key={field}> {field} </th>
          )
        })
      }
      </tr>
    )
  }
}

export default FieldNames;
