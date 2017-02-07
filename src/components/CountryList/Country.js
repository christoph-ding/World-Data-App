'use strict';
import React from 'react';

class Country extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      display: 'none',
      hiddenFields: this.determineHiddenFields(this.props.id,
        this.props.countryData)
    };
  }

  // functions for hiding or displaying the entire row of data
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

  toggleFullRow() {
    if (!this.state.expanded) {
      this.setState({display: 'table-cell', expanded: !this.state.expanded});
    } else if (this.state.expanded) {
      this.setState({display: 'none', expanded: !this.state.expanded});
    }
  }

  // flattening the fields which contain data that are collections
  isCollection(variable) {
    return (Array.isArray(variable)
      || Object.prototype.toString.call(variable) == '[object Object]');
  }

  flattenCollection(collection) {
    let output = '';
    if (collection.length > 5) {
      output = Object.values(collection).slice(0, 5).join(', ') + ' ...';
    } else {
      output = Object.values(collection).join(', ');
    }
    return output;
  }

  render() {
    return (
      <tr className="country-row" onClick={this.toggleFullRow.bind(this)}>
        <td className="cell">{this.props.countryData[this.props.id]}</td>
        {
          this.state.hiddenFields.map((field) => {
            let fieldValue = this.props.countryData[field];
            
            // we need to flatten values which are objects or arrays
            if (this.isCollection(fieldValue)) {
              fieldValue = this.flattenCollection(fieldValue);
            }

            return (<td className="cell" key={field}
              style={{display: this.state.display}}> {fieldValue} </td>);
          })
        }
     </tr>
    );
  }
}

export default Country;
