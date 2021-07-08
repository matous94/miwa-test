import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import { StoreProvider } from '../store';
import HomePage from '../components/HomePage';
import CharactersPage from '../components/CharactersPage';
import VehiclesPage from '../components/VehiclesPage';
import './App.global.css';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <Switch>
          <Route exact path="/characters">
            <CharactersPage />
          </Route>
          <Route exact path="/vehicles">
            <VehiclesPage />
          </Route>
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </StoreProvider>
  );
};

export default App;
