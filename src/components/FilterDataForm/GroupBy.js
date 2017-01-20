"use strict";
import React from 'react';

const dropDownOption = () => {
  return;
}

class GroupByForm extends React.Component{
  render() {
    return(
      <div>
        <form>
          <input type="button" value="group by" onClick={ () => {
                this.props.action('test');
              } 
            }
          />
          <select> </select>
        </form>
      </div>
    )
  }
}

export default GroupByForm;
