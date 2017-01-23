"use strict";
import React from 'react';

class FilterByForm extends React.Component{

  updateThreshold() {
    let newThreshold = this.filterThreshold.value;
    this.props.action.updateThreshold(newThreshold);
  }

  updateField(e) {
    let newField = e.target.value;
    this.props.action.updateFilterField(newField);
  }

  updateOperator(e) {
    let newOperator = e.target.value;
    this.props.action.updateOperator(newOperator);
  }

  render() {
    return(
      <div>
        <form>
          {this.props.title}:<br />
          <select onChange={ this.updateField.bind(this) }>
            {
              this.props.fields.map((field) => {
                return (
                  <option key={field}> {field} </option>
                )
              })
            }
          </select>
          <select onChange={ this.updateOperator.bind(this) }>
              <option> </option>              
              <option> = </option>
              <option> &gt; </option>
              <option> &lt; </option>              
          </select>
          <input ref={(input) => {this.filterThreshold = input}}/>
          <input type="button" onClick={this.updateThreshold.bind(this)}/>
        </form>
      </div>
    );
  }
}

export default FilterByForm;
