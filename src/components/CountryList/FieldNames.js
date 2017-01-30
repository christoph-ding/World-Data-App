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
            <th key={field}> {field} </th>
          )
        })
      }
      </tr>
    )
  }
}

// class FieldNames extends React.Component{
//   render() {
//     return (
//       <tr>
//         <th> A </th>
//         <th> N </th>
//       </tr>
//     )
//   }
// }

export default FieldNames;
