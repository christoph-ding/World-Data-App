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
          {this.props.title}:<br />
          <select>
              <option> </option>              
              <option> = </option>
              <option> &gt; </option>
              <option> &lt; </option>              
          </select>
          <select>
            {
              this.props.fields.map((field) => {
                return (
                  <option key={field}> {field} </option>
                )
              })
            }
          </select>
        </form>
      </div>
    );
  }
}

export default FilterByForm;
