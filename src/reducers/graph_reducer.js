import _ from 'lodash';
import { CLEAR_GRAPHS, SHOW_GRAPHS } from '../actions/types';
import { data } from '../data';

function payloadToGraph (times, payload) {
  const GRAPH_URL = `http://machine${payload.pool}{index}/cgi-bin/draw.cgi?Mode=show&Start=end+-+20+min&Base=${payload.app}${payload.instance}`;

  return _.map(_.times(times), function (index) {
    return _.extend(_.clone(payload), {
      machine: `machine${index}`,
      url: GRAPH_URL.replace('{index}',index)
    });
  });
}

export default function (state=[], action) {
  switch (action.type) {
  case CLEAR_GRAPHS:
    return [];
  case SHOW_GRAPHS:
    let numMachines = 1;
    if (action.payload.pool === 'test' || action.payload.pool === 'pre') {
      numMachines = 2;
    } else if (action.payload.app === 'app1' ) {
      numMachines = 4;
    } else {
      numMachines = 6;
    }
    return payloadToGraph(numMachines, action.payload);
  }

  return state;
}
