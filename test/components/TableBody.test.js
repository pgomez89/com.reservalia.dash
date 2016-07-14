import React from 'react';
import { expect } from 'chai';
import { shallow, mount  } from 'enzyme';
import TableBody from '../../universal/components/TableBody/index.js';

describe('(Component) TableBody', () => {
    it('El componente tiene su clase TableBody', () => {
        const component = shallow(<TableBody data={[]}/>);
        expect(component.is('.TableBody')).to.equal(true);
    });

    it('Con data = [] no tiene que haber TableRow', () => {
        const component = shallow(<TableBody data={[]}/>);
        expect(component.find('TableRow')).to.length(0);
    });

    it('Se crearon 4 TableRow', () => {
        let data = [
            {
                id: "245530",
                host: "www.serenabuzios.com.ar",
                sinDisponibilidad: "61",
                total: "1013"
            },
            {
                id: "263748",
                host: "www.rochesterbariloche.com.ar",
                sinDisponibilidad: "52",
                total: "446"
            },
            {
                id: "265830",
                host: "www.hotelcasamayamexico.com",
                sinDisponibilidad: "45",
                total: "253"
            },
            {
                id: "331131",
                host: "www.hotelmonserratba.com",
                sinDisponibilidad: "41",
                total: "557"
            }
        ];

        const component = shallow(<TableBody data={data}/>);
        expect(component.find('TableRow')).to.length(4);
    });
});
