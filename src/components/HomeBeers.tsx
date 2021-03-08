import { useState, useEffect } from 'react';
import '../index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../redux/Store';
import { GetBeers } from '../redux/actions/BeerActions';
import { BeerType, BeersType } from '../redux/actions/BeerActionTypes';

const HomeBeers: React.FC = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);

  const beerState: BeersType = useSelector((state: RootStore) => state.beers);
  useEffect(() => {
    dispatch(GetBeers(page));
  }, [page, dispatch]);

  const handleClick = () => {
    setPage(page + 1);
    dispatch(GetBeers(page));
  };

  return (
    <div>
      <div className="home-container">
        {beerState.beers &&
          beerState.beers.map((beer: BeerType) => {
            return (
              <div key={beer.id} className="home-beer-items">
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
              </div>
            );
          })}
      </div>
      <button onClick={handleClick}>load more</button>
    </div>
  );
};

export default HomeBeers;
