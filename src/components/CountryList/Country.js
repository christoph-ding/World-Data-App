"use strict";
import React from 'react';

class Country extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      test: ['steve','whoa','asdas']
    }
  }

  render() {
    return (
      <tr> 
        <td> Country </td>
       </tr>
    );
  }
}

// class Country extends React.Component{

//   constructor(props) {
//     super(props);
//     this.state = {
//       expanded: false,
//       display: 'none',
//       hiddenFields: this.determineHiddenFields(this.props.id, this.props.countryData)
//     }
//   }

//   toggleFullRow() {
//     if (!this.state.expanded) {
//       this.setState({display: 'table-cell', expanded: !this.state.expanded});
//     } else if (this.state.expanded) {
//       this.setState({display: 'none', expanded: !this.state.expanded});
//     }
//   }  

//   // helper functions for parsing the CountryData
//   determineHiddenFields(idKey, dataObject){
//     // we want all the fields that are not the main identifier to be hidden
//     const hiddenFields = [];
    
//     for (var field in dataObject) {
//       if (field !== idKey) {
//         hiddenFields.push(field);
//       }
//     }
//     return hiddenFields;
//   }

//   flattenCollection(collection) {
//     const output = Object.values(collection).join(', ');
//     return output;
//   }

//   isCollection(variable) {
//     return (Array.isArray(variable) || Object.prototype.toString.call(variable) == '[object Object]');
//   }

//   render() {
//     return (
//       <tr onClick={this.toggleFullRow.bind(this)}>
//         <td>{this.props.countryData[this.props.id]}</td>
//         {
//           this.state.hiddenFields.map((field)=>{
//             let fieldValue = this.props.countryData[field];
//             // we need to flatten values which are objects or arrays
//             if (this.isCollection(fieldValue)) {
//               fieldValue = this.flattenCollection(fieldValue);
//             }
//             return (<td key={field} style={{display: this.state.display}}>{fieldValue}</td>)
//           })
//         }
//       </tr>
//     );
//   }
// }

export default Country;
