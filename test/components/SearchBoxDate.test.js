import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import moment from 'moment';
import SearchBoxDate from '../../universal/components/SearchBoxDate/index.js';

describe('(Componente) SearchBoxDate', () => {
    it('El componente tiene su clase SearchBoxDate', () => {
        const component = shallow(<SearchBoxDate/>);
        expect(component.is('.SearchBoxDate')).to.equal(true);
    });

    it('El componente tiene dos componentes DatePicker', () => {
        const component = shallow(<SearchBoxDate />);
        expect(component.find('DatePicker')).to.length(2);
    });

    it('Los DatePicker están bien configurados', () => {
        const startDate = {date: 'startDate'};
        const endDate = {date: 'endDate'};

        const component = shallow(<SearchBoxDate startDate={startDate} endDate={endDate}/>);

        const startDatePicker = component.find('DatePicker').first();
        const endDatePicker = component.find('DatePicker').last();

        expect(startDatePicker.prop('startDate').date).to.equal('startDate');
        expect(startDatePicker.prop('endDate').date).to.equal('endDate');
        expect(startDatePicker.prop('selected')).to.equal(startDate);
        expect(startDatePicker.prop('dateFormat')).to.equal('DD/MM/YYYY');

        expect(endDatePicker.prop('startDate').date).to.equal('startDate');
        expect(endDatePicker.prop('endDate').date).to.equal('endDate');
        expect(endDatePicker.prop('selected')).to.equal(endDate);
        expect(endDatePicker.prop('dateFormat')).to.equal('DD/MM/YYYY');
    });

    it('Boton buscar reconoce el click', (done) => {
        const handleSubmit = () => done();
        const component = mount(<SearchBoxDate submitAvailability={handleSubmit} />);

        const button = component.find('button');

        button.simulate('click');
    });
});
