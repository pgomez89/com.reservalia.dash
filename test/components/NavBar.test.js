import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NavBar from '../../universal/components/NavBar/index.js';

describe('(Componente) NavBar', () => {
  const data = {
    userNav: 'admin',
    brandNav: 'Monitor Reservalia',
    linkNav: [
      {
        name: 'Dashboard',
        route: '/'
      },
      {
        name: 'Availability',
        route: '/availability'
      },
      {
        name: 'Charts',
        route: '/charts'
      }
    ]
  };
  const component = shallow(<NavBar data={data}/>);

  it('El componente tiene su clase NavBar', () => {
    expect(component.is('.NavBar')).to.equal(true);
  });

  it('El componente renderiza la cantidad correcta de links', () => {
    expect(component.find('.nav ul li Link')).to.length(3);
  });

  it('Al componente NavBarDropDown se le pasa la prop user con el valor correcto', () => {
    expect(component.find('NavBarDropDown').prop('user')).to.equal('admin');
  });
});
