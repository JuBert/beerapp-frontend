export const BEER_LOADING = 'BEER_LOADING';
export const BEER_SUCCESS = 'BEER_SUCCESS';
export const BEER_FAIL = 'BEER_FAIL';

export type BeersType = {
  beers: BeerType[];
};

export type BeerType = {
  id: number;
  name: string;
  tagline: string;
  description: string;
  food_paring: Array<string>;
};

export interface BeerLoading {
  type: typeof BEER_LOADING;
}

export interface BeerFail {
  type: typeof BEER_FAIL;
}

export interface BeerSucess {
  type: typeof BEER_SUCCESS;
  payload: {
    todos: BeersType;
  };
}

export type BeerDispatchTypes = BeerLoading | BeerFail | BeerSucess;
