import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TableHeader from '../../universal/components/TableHeader/index.js';

describe('(Component) TableHeader', () => {
    const headers = [1, 2, 3, 4, 5];
    const value = [1, 2, 3, 4, 5];
    const sort = {
        order: 'desc',
        colSort: 3
    };

    it('El componente tiene su clase TableHeader', () => {
        const component = shallow(<TableHeader header={headers} values={value} sort={sort}/>);
        expect(component.is('.TableHeader')).to.equal(true);
    });

    it('Hay 5 columnas', () => {
        const component = shallow(<TableHeader header={headers} values={value} sort={sort}/>);
        expect(component.find('th').length).to.equal(5);
    });

    it('El header reconoce el ordenamiento en todas las columnas', done => {
        let cont = 0;
        const handleSortRows = () => {
            cont++;
            if (cont == 5) done();
        };
        const component = shallow(<TableHeader header={headers} values={value} sort={sort} sortRows={handleSortRows}/>);
        const buttons = component.find('th');

        buttons.forEach(node => {
            node.simulate('click');
        });
    });
});
