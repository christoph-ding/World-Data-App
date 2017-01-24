"use strict";
import React from 'react';

class Country extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      value: 100,
      display: 'inline'
    }
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

  render() {
    return (
      <tr>
        <td onClick={this.test.bind(this)}>{this.props.countryData.name}</td>
        <td style={{display: this.state.display, width: this.state.value + "px"}}> Hello </td>
        <td> {this.props.countryData.name} </td>
      </tr>
    );
  }
}

export default Country;
