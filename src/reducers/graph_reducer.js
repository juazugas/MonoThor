import _ from 'lodash';
import { CLEAR_GRAPHS, SHOW_GRAPHS } from '../actions/types';
import { data } from '../data';

function payloadToGraph (times, payload) {
  console.log(payload);
  const GRAPH_URL = `http://machine${payload.pool}{index}/cgi-bin/draw.cgi?Mode=show&Start=end+-+20+min&Base=${payload.app}${payload.instance}`;

  return _.map(_.times(times), function (index) {
    return _.extend(_.clone(payload), {
      machine: `machine${index}`,
      url: GRAPH_URL.replace('{index}',index)
    })
  });
}

export default function (state=[], action) {
  switch (action.type) {
  case CLEAR_GRAPHS:
    return [];
  case SHOW_GRAPHS:
    if (action.payload.pool === 'test' || action.payload.pool === 'pre') {
      return payloadToGraph(2, action.payload);    
    } else if (action.payload.app === 'app1' ) {
      return payloadToGraph(4, action.payload);    
    } else {
      return payloadToGraph(6, action.payload);    
    }
  }

  return state;
}
