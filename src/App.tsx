import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from './Store';
import { GetBeers } from './actions/BeerActions';
import { BeersType } from './actions/BeerActionTypes';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const beerState: BeersType = useSelector((state: RootStore) => state.beers);
  useEffect(() => {
    dispatch(GetBeers());
  }, [dispatch]);
  const beers = beerState.beers;
  console.log(beers);
  return (
    <div className="App">
      {beers &&
        beers.map((beer) => {
          return <p key={beer.id}>{beer.name}</p>;
        })}
    </div>
  );
};

export default App;
