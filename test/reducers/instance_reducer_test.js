import { expect } from '../test_helper';

import instanceReducer from '../../src/reducers/instance_reducer';
import { CLEAR_GRAPHS, SELECT_APP, SELECT_POOL } from '../../src/actions/types';

describe('InstanceReducer', () => {

  it('should handle unknown type', () => {
    let reduction = instanceReducer(undefined, {});
    expect(reduction).to.be.instanceof(Array);
    expect(reduction).to.be.eql([]);
  });

  it('should handle CLEAR_GRAPHS', () => {
    let reduction = instanceReducer(undefined, { type: CLEAR_GRAPHS });
    expect(reduction).to.be.instanceof(Array);
    expect(reduction).to.be.eql([]);
  });

  it('should handle SELECT_APP', () => {
    let reduction = instanceReducer(undefined, { type: SELECT_APP, payload: 'app2' });
    expect(reduction).to.be.instanceof(Array);
    expect(reduction).to.be.eql(['00','01','02','03', '04','05']);
  });

  it('should handle SELECT_APP with payload app1', () => {
    let reduction = instanceReducer(undefined, { type: SELECT_APP, payload: 'app1' });
    expect(reduction).to.be.instanceof(Array);
    expect(reduction).to.be.eql(['00','01']);
  });

  it('should handle SELECT_POOL', () => {
    let reduction = instanceReducer(undefined, { type: SELECT_POOL, payload: { pool: '00', app: 'app2' } });
    expect(reduction).to.be.instanceof(Array);
    expect(reduction).to.be.eql(['00','01','02','03', '04','05']);
  });

  it('should handle SELECT_POOL with pool pre', () => {
    let reduction = instanceReducer(undefined, { type: SELECT_POOL, payload: { pool: 'pre' } });
    expect(reduction).to.be.instanceof(Array);
    expect(reduction).to.be.eql([]);
  });

});
