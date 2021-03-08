import './index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Pages
import home from './pages/home';
import about from './pages/about';
import contact from './pages/contact';
//Components
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/about" component={about} />
          <Route exact path="/contact" component={contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
