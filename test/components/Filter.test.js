import React from 'react'
import { expect } from 'chai';
import { shallow, mount  } from 'enzyme';
import Filter from '../../universal/components/Filter/index.js';

describe('(Componente) Filter', () => {
    it('El componente tiene su clase Filter', () => {
        const wrapper = shallow(<Filter/>);
        expect(wrapper.is('.Filter')).to.equal(true);
    });

    it('Existe la propiedad filterText en el input', () => {
        const handleChange = () => {};
        const wrapper = mount(<Filter filterText={'prueba'} chargeInput={handleChange}/>);
        expect(wrapper.find('.form-control').prop('value')).to.equal('prueba');
    });

    it('El input reconoce el cambio de valor', (done) => {
        const handleChange = () => {
            done();
        };
        let component = mount(<Filter chargeInput={handleChange}/>);
        let input = component.find('.form-control');
        input.simulate('change');
    });
});
