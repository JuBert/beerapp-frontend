import { useEffect } from 'react';
import '../index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../redux/Store';
import { GetBeers } from '../redux/actions/BeerActions';
import { BeersType } from '../redux/actions/BeerActionTypes';

const HomeBeers: React.FC = () => {
  const dispatch = useDispatch();
  const beerState: BeersType = useSelector((state: RootStore) => state.beers);
  useEffect(() => {
    dispatch(GetBeers());
  }, [dispatch]);
  const beers = beerState.beers;
  return (
    <div>
      <div className="home-container">
        {beers &&
          beers.map((beer) => {
            return (
              <div key={beer.id} className="home-beer-items">
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
