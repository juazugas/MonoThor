import _ from 'lodash';
import { SHOW_GRAPHS } from '../actions/types';
import { data } from '../data';


function payloadToGraph (times, payload) {
  return _.map(_.times(times), function (index) {
    return _.extend(_.clone(payload), {machine: 'machine'+index})
  });
}

export default function (state=[], action) {
  switch (action.type) {
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
