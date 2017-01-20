"use strict";
import React from 'react';

class Country extends React.Component{
  render() {
    return (
      <h4> {this.props.countryData.name} </h4>
    );
  }
}

export default Country;
