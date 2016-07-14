import React from 'react'
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Loading from '../../universal/components/Loading/index.js';

describe('(Componente) Loading', () => {
  it('El componente tiene su clase Loading', () => {
    const component = shallow(<Loading/>);
    expect(component.is('.Loading')).to.equal(true);
  });

  it('El componente tiene el path cargado de la imagen', () => {
    const component = mount(<Loading />);
    expect(component.find('img').prop('src')).to.equal('loading.gif');
  });
});
