import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import CountryList from '../src/components/CountryList/CountryList';
import FieldNames from '../src/components/CountryList/FieldNames';
import Grouping from '../src/components/CountryList/Grouping';

describe('CountryList elements', () => {
  // set up the component
  const propCountryData = {
    'Asia': [{'name': 'Japan', 'population': 100}, 
             {'name': 'Korea', 'population': 200}],
    'Europe': [{'name': 'France', 'population': 300}, 
               {'name': 'Germany', 'population': 400}]
  }
  const propFields = ['name', 'population'];
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<CountryList countryData={propCountryData} fields={propFields}/>);
  });

  // tests
  it('should contain a FieldNames component', () => {
    expect(wrapper.contains(<FieldNames />));
  });

  it('should contain 2 groupings', () => {
    expect(wrapper.find(Grouping)).to.have.length(2);
  })
})
