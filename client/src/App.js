import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from '../src/components/pagesections/Home';


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
