import { expect } from '../test_helper';

import poolReducer from '../../src/reducers/pool_reducer';
import { CLEAR_GRAPHS, SELECT_APP } from '../../src/actions/types';

describe('PoolReducer', () => {

  it('should handle unknown type', () => {
    let reduction = poolReducer(undefined, {});
    expect(reduction).to.be.instanceof(Array);
    expect(reduction).to.be.eql([]);
  });

  it('should handle CLEAR_GRAPHS', () => {
    let reduction = poolReducer(undefined, { type: CLEAR_GRAPHS });
    expect(reduction).to.be.instanceof(Array);
    expect(reduction).to.be.eql([]);
  });

  it('should handle SELECT_APP', () => {
    let reduction = poolReducer(undefined, { type: SELECT_APP, payload: 'payload' });
    expect(reduction).to.be.instanceof(Array);
    expect(reduction).to.be.eql(['test', 'pre', '0', '1', '2', '3', '4']);
  });

  it('should handle SELECT_APP with payload app1', () => {
    let reduction = poolReducer(undefined, { type: SELECT_APP, payload: 'app1' });
    expect(reduction).to.be.instanceof(Array);
    expect(reduction).to.be.eql(['test', 'pre', '1', '2', '3']);
  });

});
