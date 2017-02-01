import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import WorldDataApp from '../src/components/App.js';
import FilterDataForm from '../src/components/FilterDataForm/FilterDataForm';
import FilterByForm from '../src/components/FilterDataForm/FilterBy';
import ChangeOrderForm from '../src/components/FilterDataForm/changeDataOrdering';

describe('FilterDataForm elements', () => {

  const stubActions={regroup: undefined}
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<FilterDataForm actions={stubActions}/>);
  });

  it('should contain two ChangeOrderForms', () => {
    expect(wrapper.find(ChangeOrderForm)).to.have.length(2);
  });

  it('should contain a FilterByForm', () => {
    expect(wrapper.contains(<FilterByForm/>));
  });
})
