'use strict';
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
      <div className="single-filter-form">
        <form>
          <h3 className="filter-label">{this.props.title}: </h3>
          <select className="drop-down" onChange={ this.updateField.bind(this) }>
            <option> </option>
            {
              this.props.fields.map((field) => {
                return (
                  <option key={field}> {field} </option>
                );
              })
            }
          </select>
          <select className="drop-down" onChange={ this.updateOperator.bind(this) }>
              <option> </option>
              <option> = </option>
              <option> &gt; </option>
              <option> &lt; </option>
          </select>
          <input className="drop-down" ref={(input) => {this.filterThreshold = input;}}/>
          <input className="drop-down" type="button" onClick={this.updateThreshold.bind(this)} value="Add" />
        </form>
      </div>
    );
  }
}

export default FilterByForm;
