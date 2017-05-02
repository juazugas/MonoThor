import { expect } from '../test_helper';

import timerReducer from '../../src/reducers/timer_reducer';
import { START_TIMER, STOP_TIMER } from '../../src/actions/types';

describe('TimerReducer', () => {

  it('should handle unknown type', () => {
    let reduction = timerReducer(undefined, {});
    expect(reduction).to.be.equal('');
  });

  it('should handle START_TIMER', () => {
    let reduction = timerReducer(undefined, { type: START_TIMER });
    expect(reduction).to.be.equal(START_TIMER);
  });

  it('should handle STOP_TIMER', () => {
    let reduction = timerReducer(undefined, { type: STOP_TIMER });
    expect(reduction).to.be.equal(STOP_TIMER);
  });

});
