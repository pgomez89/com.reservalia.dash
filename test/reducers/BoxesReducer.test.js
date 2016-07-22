import reducer, { defaultState } from '../../reducers/universal/boxes_reducer/index.js';
import deepFreeze from 'deep-freeze';

describe('(Redux) boxesReducer', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});
