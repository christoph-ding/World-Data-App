"use strict";
import React from 'react';

class GroupByForm extends React.Component{
  render() {
    return(
      <div>
        <form>
          <input type="button" value="group by" onClick={ () => {
                this.props.action('region');
              } 
            }
          />
          <select>
            {
              this.props.fields.map((field) => {
                return (
                  <option> {field} </option>
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
