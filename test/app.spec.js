import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import WorldDataApp from '../src/components/App.js';
import Title from '../src/components/Title.js';
import FilterDataForm from '../src/components/FilterDataForm/FilterDataForm.js';
import CountryList from '../src/components/CountryList/CountryList.js';

describe('App elements', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<WorldDataApp/>);
  });

  it('should contain a Title component', () => {
    expect(wrapper.contains(<Title/>));
  })

  it('should contain a FilterDataForm component', () => {
    expect(wrapper.contains(<FilterDataForm/>));
  })

  it('should contain a CountryList component', () => {
    expect(wrapper.contains(<CountryList/>));
  })
  
}); 
