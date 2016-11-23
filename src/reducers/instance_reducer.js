import { SELECT_APP, SELECT_POOL } from '../actions/types';
import { data } from '../data';

function instanceByApp (app) {
  switch (app) {
    case 'app1':
      return ["00", "01"];
    case 'app2': 
      return ["00","01","02","03","04","05"];
  }
  return [];
}


export default function (state=[], action) {
  switch (action.type) {
  case SELECT_APP:
    return instanceByApp(action.payload);
  case SELECT_POOL: 
    switch (action.payload.pool) {
      case 'pre': case 'test':
        return [];
      default:
        return instanceByApp(action.payload.app);
    }
  }

  return state;
}
