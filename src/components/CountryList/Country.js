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

// <td style={{display: this.state.display, width: this.state.value + "px"}}> Hello </td>

  render() {
    return (
      <tr onClick={this.toggleFullCountry.bind(this)}>
        <td>{this.props.countryData[this.props.id]}</td>
        {
          this.state.hiddenFields.map((field)=>{
            let fieldValue = this.props.countryData[field];
            // console.log(fieldValue);
            return (<td>fieldValue</td>)
          })
        }
      </tr>
    );
  }
}

export default Country;
