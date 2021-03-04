import React from 'react';
import './App.css';
//Components
import HomeBeers from './components/HomeBeers';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <HomeBeers />
    </div>
  );
};

export default App;
