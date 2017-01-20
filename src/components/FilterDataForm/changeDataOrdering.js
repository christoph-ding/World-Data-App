"use strict";
import React from 'react';

class ChangeOrderForm extends React.Component{

  handleChange(e) {
    let newOption = e.target.value;    
    this.props.action(newOption);
  }

  render() {
    return(
      <div>
        <form>
          {this.props.title}:<br />
          <select onChange={this.handleChange.bind(this)}> 
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

export default ChangeOrderForm;
