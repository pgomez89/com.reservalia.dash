import React from 'react'
import { expect } from 'chai';
import { shallow, mount  } from 'enzyme';
import Table from '../../universal/components/Table/index.js';

describe('(Componente) Table', () => {
    const state = {
        data: [
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
            },
            {
                id: "228626",
                host: "www.reservashotelmarbella.com",
                sinDisponibilidad: "36",
                total: "438"
            },
            {
                id: "310438",
                host: "www.altoandinohotel.com",
                sinDisponibilidad: "34",
                total: "351"
            },
            {
                id: "592141",
                host: "www.hotelriobranco.net",
                sinDisponibilidad: "34",
                total: "365"
            }
        ],
        headers: [],
        visibleData: [{}],
        sort: {
            order: 'desc',
            colSort: 'sinDisponibilidad'
        },
        isErrorFilter: false
    };


    it('El componente tiene su clase Table', () => {
        const component = shallow(<Table data={state.visibleData}/>);
        expect(component.is('.Table')).to.equal(true);
    });

    it('El componente tiene el componente TableHeader y TableBody', () => {
        const component = shallow(<Table data={state.visibleData}/>);
        expect(component.find('TableHeader')).to.length(1);
        expect(component.find('TableBody')).to.length(1);
    });

    it('El componente tiene todas sus propiedas', () => {
        const handleSortRows = () => {
        };
        const component = shallow(<Table headers={state.headers} data={state.visibleData} sortRows={handleSortRows}
                                         sort={state.sort} isErrorFilter={state.isErrorFilter}/>);

        const tableHeader = component.find('TableHeader');
        const tableBody = component.find('TableBody');

        expect(tableHeader.prop('header')).to.eql([]);
        expect(tableHeader.prop('sort')).to.have.all.keys('order', 'colSort');
        expect(tableHeader.prop('values')).to.eql([]);
        expect(tableHeader.prop('sortRows')).to.exist;

        expect(tableBody.prop('data')).to.eql([{}])
    });

    it('Se muestra mensaje de error', () => {
        const component = shallow(<Table headers={state.headers} data={[{}]} sort={state.sort}
                                         isErrorFilter={true}/>);
        expect(component.find('ErrorBox')).to.length(1);
    });
});
