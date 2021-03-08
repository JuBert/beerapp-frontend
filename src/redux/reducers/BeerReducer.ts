import {
  BeersType,
  BeerDispatchTypes,
  BEER_LOADING,
  BEER_SUCCESS,
  BEER_FAIL,
} from '../actions/BeerActionTypes';

interface DefaultStateI {
  loading: boolean;
  beers?: BeersType;
}

const defaultState: DefaultStateI = {
  loading: false,
};

const BeerReducer = (
  state: DefaultStateI = defaultState,
  action: BeerDispatchTypes
) => {
  switch (action.type) {
    case BEER_FAIL:
      return {
        loading: false,
      };
    case BEER_LOADING:
      return {
        loading: true,
      };
    case BEER_SUCCESS:
      return {
        loading: false,
        // beers: [...state.beers, ...action.payload],
        beers: action.payload,
        // beers: {...state.beers,[action.payload.beers._id]: action.payload}
      };
    default:
      return state;
  }
};

export default BeerReducer;
