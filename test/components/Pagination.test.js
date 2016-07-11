import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Pagination from '../../universal/components/Pagination/index.js';

describe('(Componente) Pagination', () => {
    const pages = 5;
    const actualPage = 3;

    it('Existe el componente', () => {
        const wrapper = shallow(<Pagination pages={pages}/>);
        expect(wrapper.find('nav ul')).to.have.length(1);
    });

    it('Carga todos los botones', () => {
        const wrapper = shallow(<Pagination pages={pages}/>);
        expect((wrapper).find('li')).to.have.length(7);
    });

    it('Se selecciona correctamente la página actual', () => {
        const wrapper = shallow(<Pagination pages={pages} actualPage={actualPage}/>);
        expect((wrapper).find('.activePage').props().children.props.value).equal(3);
    });
});
