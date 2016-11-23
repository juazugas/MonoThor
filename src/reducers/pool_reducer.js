import { SELECT_APP } from '../actions/types';
import { data } from '../data';

export default (state=[], action) => {
  switch (action.type) {
  case SELECT_APP:
    switch (action.payload) {
      case 'app1':
        return ["test", "pre", "1", "2", "3"];
      default : 
        return [ "test", "pre", "0" , "1", "2", "3", "4" ];
    }
  }

  return state;
}
