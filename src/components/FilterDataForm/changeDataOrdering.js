'use strict';
import React from 'react';

class ChangeOrderForm extends React.Component{

  handleChange(e) {
    let newOption = e.target.value;
    this.props.action(newOption);
  }

  render() {
    return(
      <div className="single-filter-form">
        <form>
            <h3 className="filter-label">{this.props.title}: </h3>
            <select className="drop-down" onChange={this.handleChange.bind(this)}>
              <option> </option>
              {
                this.props.fields.map((field) => {
                  return (
                    <option key={field}> {field} </option>
                  );
                })
              }
            </select>
        </form>
      </div>
    );
  }
}

export default ChangeOrderForm;
