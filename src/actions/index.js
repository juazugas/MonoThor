import { 
  SELECT_APP,
  SELECT_POOL,
  SELECT_INSTANCE,
  SHOW_GRAPHS,
  CLEAR_GRAPHS,
  START_TIMER,
  STOP_TIMER
} from './types';

export function selectApp (app) {
  return {
    type: SELECT_APP,
    payload: app
  };
}

export function selectPool (data) {
  return {
    type: SELECT_POOL,
    payload: data
  };
}

export function selectInstance (instance) {
  return {
    type: SELECT_INSTANCE,
    payload: instance
  };
}

export function showGraphs (data) {
  return {
    type: SHOW_GRAPHS,
    payload: data
  };
}

export function clearGraphs () {
  return {
    type: CLEAR_GRAPHS
  };
}

export function startTimer () {
  return {
    type: START_TIMER
  };
}

export function stopTimer () {
  return {
    type: STOP_TIMER
  };
}
