import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import WorldDataApp from '../src/components/App';
import Title from '../src/components/Title';
import FilterDataForm from '../src/components/FilterDataForm/FilterDataForm';
import CountryList from '../src/components/CountryList/CountryList';

describe('App elements', () => {
  // set up the component
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<WorldDataApp/>);
  });

  // tests
  it('should contain a Title component', () => {
    expect(wrapper.contains(<Title/>));
  });

  it('should contain a FilterDataForm component', () => {
    expect(wrapper.contains(<FilterDataForm/>));
  });

  it('should contain a CountryList component', () => {
    expect(wrapper.contains(<CountryList/>));
  });
  
});

describe('App initial state and data', () => {
  // set up the component
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<WorldDataApp/>);
  });

  // tests
  it('should start with states that hold world data', () => {
    expect(wrapper.state('formattedRawData')).to.eql([]);
    expect(wrapper.state('groupedData')).to.eql({});
    expect(wrapper.state('dataFields')).to.eql([]);
  });

  it('should start with states that hold the user chosen filter parameters', () => {
    expect(wrapper.state('selectGrouping')).to.eql(undefined);
    expect(wrapper.state('selectedSorting')).to.eql(undefined);
    expect(wrapper.state('selectedFilterField')).to.eql(undefined);
    expect(wrapper.state('selectedOperator')).to.eql(undefined);
    expect(wrapper.state('filterThreshold')).to.eql('');
  });
});
