import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ErrorBox from '../../universal/components/ErrorBox/index.js';

describe('(Componente) ErrorBox', () => {
    it('El componente tiene su clase ErrorBox', () => {
        const wrapper = shallow(<ErrorBox/>);
        expect(wrapper.is('.ErrorBox')).to.equal(true);
    });
});
