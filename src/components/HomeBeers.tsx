import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../Store';
import { GetBeers } from '../actions/BeerActions';
import { BeersType } from '../actions/BeerActionTypes';

const HomeBeers: React.FC = () => {
  const dispatch = useDispatch();
  const beerState: BeersType = useSelector((state: RootStore) => state.beers);
  useEffect(() => {
    dispatch(GetBeers());
  }, [dispatch]);
  const beers = beerState.beers;
  console.log(beers);
  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {beers &&
          beers.map((beer) => {
            return (
              <div
                key={beer.id}
                style={{
                  width: '400px',
                  border: 'solid',
                  borderRadius: '15px',
                  padding: '10px',
                  margin: '10px',
                }}
              >
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HomeBeers;
