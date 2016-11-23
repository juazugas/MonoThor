import { combineReducers } from 'redux';
import PoolReducer from './pool_reducer';
import AppReducer from './app_reducer';
import InstanceReducer from './instance_reducer';

const rootReducer = combineReducers({
  pools: PoolReducer,
  apps: AppReducer,
  instances: InstanceReducer
});

export default rootReducer;
