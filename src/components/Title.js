"use strict";
import React from 'react';

const title = 'I am the title of this app';
const description = 'I describe what this app does';

class Title extends React.Component{
  render() {
    return (
      <div>
        <h1> {title} </h1>
        <p>  {description} </p>
      </div>
    )
  }
}

export default Title
