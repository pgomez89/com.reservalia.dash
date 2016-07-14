import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NavBarDropDown from '../../universal/components/NavBarDropDown/index.js';

describe('(Componente) NavBarDropDown', () => {
  it('El componente tiene su clase NavBarDropDown', () => {
    const component = shallow(<NavBarDropDown/>);
    expect(component.is('.NavBarDropDown')).to.equal(true);
  });

  it('El componente tiene su propiedad user', () => {
    const component = shallow(<NavBarDropDown user={'user prueba'} />);
    expect(component.find('.dropdown-toggle').text()).to.equal('user prueba');
  });
});
