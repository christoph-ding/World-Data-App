import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Country from '../src/components/CountryList/Country';

describe('Country states', () => {
  // set up the component
  const propData = {
    id: 'name',
    countryData: {
      'name': 'Mexico', 
      'population': 100,
      'region': 'America',
      'language': 'Spanish'
    }

  }
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<Country id={propData.id} countryData={propData.countryData}/>);
  });

  // tests
  it('should have most of its fields hidden, to begin with', () => {
    expect(wrapper.state('expanded')).to.eql(false);
    expect(wrapper.state('display')).to.eql('none');
  });

  it('should correctly determine which fields to hide', () => {
    expect(wrapper.state('hiddenFields')).to.eql(['population', 'region', 'language']);
  })

  it('should unhide hidden rows when clicked', () => {
    const clickID = wrapper.find(".country-row");
    clickID.simulate('click');
    expect(wrapper.state('expanded')).to.eql(true);
    expect(wrapper.state('display')).to.eql('table-cell');
  })

  it('should hide hidden rows when clicked', () => {
    const clickID = wrapper.find(".country-row");
    clickID.simulate('click');
    clickID.simulate('click');    
    expect(wrapper.state('expanded')).to.eql(false); 
    expect(wrapper.state('display')).to.eql('none');
  });


})
