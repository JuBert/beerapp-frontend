import { Dispatch } from 'redux';
import axios from 'axios';
import { BEER_LOADING, BEER_SUCCESS, BEER_FAIL } from './BeerActionTypes';

export const GetBeers = (page: number) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: BEER_LOADING,
    });

    const res = await axios.get(
      `https://europe-west1-rickandmorty-26bab.cloudfunctions.net/api/beers?page=${page}`
    );

    dispatch({
      type: BEER_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: BEER_FAIL,
    });
  }
};
