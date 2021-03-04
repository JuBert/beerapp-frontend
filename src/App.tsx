import React from 'react';
import './App.css';
//Components
import HomeBeers from './components/HomeBeers';

const App: React.FC = () => {
  return (
    <div className="App">
      <HomeBeers />
    </div>
  );
};

export default App;
