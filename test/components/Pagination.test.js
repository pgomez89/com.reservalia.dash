import React from 'react'
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Pagination from '../../universal/components/Pagination/index.js';

describe('(Componente) Pagination', () => {
    const pages = 5;
    const actualPage = 3;
    it('Existe el componente', () => {
        const component = shallow(<Pagination pages={pages}/>);
        expect(component.find('ul').is('.pagination')).to.equal(true);
    });

    it('Carga todos los botones', () => {
        const component = shallow(<Pagination pages={pages}/>);
        expect((component).find('li')).to.have.length(7);
    });

    it('Se selecciona correctamente la página actual', () => {
        const component = shallow(<Pagination pages={pages} actualPage={actualPage}/>);
        expect((component).find('li.activePage').text()).to.equal('3');
    });

    it('Click en pagina siguiente', (done) => {
        const handleNextPage = () => done();
        const component = mount(<Pagination pages={pages} actualPage={actualPage} clickNextPage={handleNextPage}/>);
        const nextButton = component.find('li a').last();
        nextButton.simulate('click');
    });

    it('Click en pagina anterior', (done) => {
        const handlePreviousPage = () => done();
        const component = mount(<Pagination pages={pages} actualPage={actualPage} clickPreviousPage={handlePreviousPage}/>);
        const previousButton = component.find('li a').first();
        previousButton.simulate('click')
    });

    it('Click en la pagina 5', (done) => {
        const handlePageNumber = (e) => {
            if(e.target.value == 5) done();
        };
        const component = mount(<Pagination pages={pages} actualPage={actualPage} clickNumberPage={handlePageNumber}/>);
        const buttonFive = component.find('li a').at(5);
        buttonFive.simulate('click');
    });
});
