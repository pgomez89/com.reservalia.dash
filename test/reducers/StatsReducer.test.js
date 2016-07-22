import reducer, { defaultState } from '../../reducers/universal/stats_reducer/index.js';
import deepFreeze from 'deep-freeze';

describe('(Redux) statsReducer', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});
