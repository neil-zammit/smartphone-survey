import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <Navbar />
                <Home />
              </React.Fragment>
            )}
          />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
