import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TableRow from '../../universal/components/TableRow/index.js';

describe('(Component) TableRow', () => {
  it('El componente tiene su clase TableRow', () => {
    const component = shallow(<TableRow info={{}} />);
    expect(component.is('.TableRow')).to.equal(true);
  });

    it('Se carga la cantidad correcta de datos', () => {
        const info =  {
            id: "245530",
            host: "www.serenabuzios.com.ar",
            sinDisponibilidad: "61",
            total: "1013"
        };

        const component = shallow(<TableRow info={info}/>);
        expect(component.find('td').length).to.equal(4);
    });
});
