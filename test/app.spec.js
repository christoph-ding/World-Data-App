import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import WorldDataApp from '../src/components/App.js';
import Title from '../src/components/Title.js';
import FilterDataForm from '../src/components/FilterDataForm/FilterDataForm.js';
import CountryList from '../src/components/CountryList/CountryList';

describe('test', () => {
  it('should contain Title, FilterDataForm and CountryList components', ()=> {
    const wrapper = shallow(<WorldDataApp/>);
    expect(wrapper.containsAllMatchingElements([
      <Title/>,
      <FilterDataForm/>,
      <CountryList/>
    ])).to.equal(true);
  });

}); 
