import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import ShowPages from '../../universal/components/ShowPages/index.js';

describe('(Component) ShowPages', () => {
  it('El componente tiene su clase ShowPages', () => {
    const component = shallow(<ShowPages/>);
    expect(component.is('.ShowPages')).to.equal(true);
  });

  it('El componente reconcer el evento change', done => {
    const handleShowRows = () => done();
    const component = mount(<ShowPages selectCantRows={handleShowRows}/>);
    const select = component.find('select');

    select.simulate('change');
  });
});
