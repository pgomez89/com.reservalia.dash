import reducer, { defaultState } from '<%= reducersRelativePath %>/<%= snakeEntityName %>/index.js';
import deepFreeze from 'deep-freeze';

describe('(Redux) <%= camelEntityName %>', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});
