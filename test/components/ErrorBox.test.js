import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ErrorBox from '../../universal/components/ErrorBox/index.js';

describe('(Componente) ErrorBox', () => {
    it('El componente tiene su clase ErrorBox', () => {
        const component = shallow(<ErrorBox/>);
        expect(component.is('.ErrorBox')).to.equal(true);
    });
});
