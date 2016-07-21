import {expect} from 'chai';
import moment from 'moment';
import * as action from '../../universal/actions/AvailabilityActions';
import * as types from '../../universal/constants/ActionTypes';

describe('Actions', () => {
    it('changePageNumber', () => {
        const numberPage = 5;
        const expectedAction = {
            type: types.CHANGE_PAGE_NUMBER,
            numberPage
        };
        expect(action.changePageNumber(numberPage)).to.eql(expectedAction)
    });

    it('selectShowRows', () => {
        const cantRows = 25;
        const expectedAction = {
            type: types.SELECT_SHOW_ROWS,
            cantRows
        };
        expect(action.selectShowRows(cantRows)).to.eql(expectedAction)
    });

    it('selectStartDate', () => {
        const startDate = moment();
        const expectedAction = {
            type: types.SELECT_START_DATE,
            startDate
        };
        expect(action.selectStartDate(startDate)).to.eql(expectedAction)
    });

    it('selectEndDate', () => {
        const endDate = moment();
        const expectedAction = {
            type: types.SELECT_END_DATE,
            endDate
        };
        expect(action.selectEndDate(endDate)).to.eql(expectedAction)
    });

    it('resetStateAvailability', () => {
        const expectedAction = {
            type: types.RESET_STATE
        };
        expect(action.resetStateAvailability()).to.eql(expectedAction)
    });
});
