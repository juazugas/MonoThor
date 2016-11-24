import { combineReducers } from 'redux';
import PoolReducer from './pool_reducer';
import AppReducer from './app_reducer';
import InstanceReducer from './instance_reducer';
import GraphReducer from './graph_reducer';

const rootReducer = combineReducers({
  apps: AppReducer,
  pools: PoolReducer,
  instances: InstanceReducer,
  graphs: GraphReducer
});

export default rootReducer;
