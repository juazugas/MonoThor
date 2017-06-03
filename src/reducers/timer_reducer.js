import { START_TIMER, STOP_TIMER } from '../actions/types';

export default (state='', action) => {
  switch (action.type) {
  case START_TIMER:
  case STOP_TIMER:
    return action.type;
  }
  return state;
};
