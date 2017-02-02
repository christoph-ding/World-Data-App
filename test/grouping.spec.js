import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Grouping from '../src/components/CountryList/Grouping';
import Country from '../src/components/CountryList/Country';

describe('Grouping elements', () => {
  // set up the component
  const propData = {
    spanAll: 10,
    level: 'Asia',
    countryList: ['China', 'Spain', 'Egypt']
  }
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<Grouping spanAll={propData.spanAll} key={'name'} level={propData.level} countryList={propData.countryList} id={'name'}/>);
  });
  // tests
  it('should contain three country components', () => {
    expect(wrapper.find(Country)).to.have.length(3);
  });  
})