"use strict";
import React from 'react';

class Country extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }


  test() {
    this.setState({expanded: !this.state.expanded}, () => {
      console.log(this.state.expanded);      
    })
  }

  render() {
    return (
      <tr onClick={this.test.bind(this)}>
        <td>{this.props.countryData.name}</td>
      </tr>
    );
  }
}

export default Country;
