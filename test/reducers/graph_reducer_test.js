import { expect } from '../test_helper';

import graphReducer from '../../src/reducers/graph_reducer';
import { CLEAR_GRAPHS, SHOW_GRAPHS } from '../../src/actions/types';

describe('GraphReducer', () => {

  it('should handle unknow type', () => {
    let reduction = graphReducer(undefined, {});
    expect(reduction).to.be.instanceof(Array);
    expect(reduction).to.be.eql([]);
  });

  it('should handle CLEAR_GRAPHS', () => {
    let reduction = graphReducer(['whatever'], { type: CLEAR_GRAPHS });
    expect(reduction).to.be.instanceof(Array);
    expect(reduction).to.be.eql([]);
  });

  it('should handle SHOW_GRAPHS', () => {
    let reduction = graphReducer(undefined, { type: SHOW_GRAPHS, payload:{ app:'app1', pool:'test' }});
    expect(reduction).to.be.instanceof(Array);
    expect(reduction.length).to.be.equal(2);
    expect(reduction[0]).to.have.all.keys("app","machine","pool","url");
    expect(reduction[0].app).to.be.equal("app1");
    expect(reduction[0].pool).to.be.equal("test");
  });

});
