"use strict";
import React from 'react';

class Country extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      value: 100,
      display: 'inline',
      hiddenFields: this.determineHiddenFields(this.props.id, this.props.countryData)
    }
  }

  determineHiddenFields(idKey, dataObject){
    // we want all the fields that are not the main identifier to be hidden
    const hiddenFields = [];
    
    for (var field in dataObject) {
      if (field !== idKey) {
        hiddenFields.push(field);
      }
    }
    return hiddenFields;
  }

  flattenCollection(collection) {
    const output = Object.values(collection).join(', ');
    return output;
  }

  toggleFullCountry() {
    console.log(this.props.countryData);
  }

  test() {
    this.setState({expanded: !this.state.expanded}, () => {
      if (this.state.display == 'inline') {
        this.setState({display: 'none'});        
      } else if (this.state.display == 'none') {
        this.setState({display: 'inline'});
      }   
    })
  }

  isCollection(variable) {
    return (Array.isArray(variable) || Object.prototype.toString.call(variable) == '[object Object]');
  }


// <td style={{display: this.state.display, width: this.state.value + "px"}}> Hello </td>

  render() {
    return (
      <tr onClick={this.toggleFullCountry.bind(this)}>
        <td>{this.props.countryData[this.props.id]}</td>
        {
          this.state.hiddenFields.map((field)=>{
            let fieldValue = this.props.countryData[field];
            // we need to flatten values which are objects or arrays
            if (this.isCollection(fieldValue)) {
              fieldValue = this.flattenCollection(fieldValue);
            }
            return (<td key={field}>{fieldValue}</td>)
          })
        }
      </tr>
    );
  }
}

export default Country;
