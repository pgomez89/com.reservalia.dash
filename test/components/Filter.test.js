import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Filter from '../../universal/components/Filter/index.js';

describe('(Componente) Filter', () => {
    it('El componente tiene su clase Filter', () => {
        const component = shallow(<Filter/>);
        expect(component.is('.Filter')).to.equal(true);
    });

    it('Existe la propiedad filterText en el input', () => {
        const handleChange = () => {};
        const component = shallow(<Filter filterText={'prueba'} chargeInput={handleChange}/>);
        expect(component.find('.form-control').prop('value')).to.equal('prueba');
    });

    it('El input reconoce el cambio de valor', (done) => {
        const handleChange = () => {
            done();
        };
        const component = shallow(<Filter chargeInput={handleChange}/>);
        const input = component.find('.form-control');
        input.simulate('change');
    });
});
