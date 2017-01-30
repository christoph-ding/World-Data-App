"use strict";
import React from 'react';

class GroupByForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: undefined
    }
  }

  handleChange(e) {
    let newOption = e.target.value;
    this.setState({selectedOption: newOption})
  }

  render() {
    return(
      <div>
        <form>
          <input type="button" value="group by" onClick={ () => {
                this.props.action(this.state.selectedOption);
              } 
            }
          />
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
    )
  }
}

export default GroupByForm;
