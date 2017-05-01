import { expect } from '../test_helper';

import appReducer from '../../src/reducers/app_reducer';

describe('AppReducer', () => {

  it('should handle unknown type', () => {
    let reduction = appReducer(undefined, {});
    expect(reduction).to.be.instanceof(Array);
    expect(reduction).to.be.eql(['app1','app2','app3']);
  });

});
