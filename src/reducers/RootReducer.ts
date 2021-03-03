import { combineReducers } from 'redux';
import BeerReducer from './BeerReducer';

const RootReducer = combineReducers({
  beers: BeerReducer,
});

export default RootReducer;
