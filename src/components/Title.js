"use strict";
import React from 'react';

const title = 'World Data Viewer';
const description = 'This is an app for ';

class Title extends React.Component{
  render() {
    return (
      <div className="card title-box">
        <h1 className='title'> {title} </h1>
        <p className='description'>  {description} </p>
      </div>
    )
  }
}

export default Title
