"use strict";
import React from 'react';

const dropDownOption = () => {
  return;
}

class FilterByForm extends React.Component{
  render() {
    return(
      <div>
        <form>
          <input type="button" value="filter by" />
          <select> </select>
          <input type="text"/> 
        </form>
      </div>
    );
  }
}

export default FilterByForm;
