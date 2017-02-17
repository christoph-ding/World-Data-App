import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FilterDataForm from '../js/lib/components/FilterDataForm/FilterDataForm';
import FilterByForm from '../js/lib/components/FilterDataForm/FilterBy';
import ChangeOrderForm from '../js/lib/components/FilterDataForm/changeDataOrdering';

describe('FilterDataForm elements', () => {
  // set up the component
  const propStubActions={regroup: undefined};
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<FilterDataForm actions={propStubActions}/>);
  });

  // tests
  it('should contain two ChangeOrderForm components', () => {
    expect(wrapper.find(ChangeOrderForm)).to.have.length(2);
  });

  it('should contain a FilterByForm component', () => {
    expect(wrapper.contains(<FilterByForm/>));
  });
});
