import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from '../src/components/pagesections/Home';
import About from './components/pagesections/About';
import Skills from './components/pagesections/Skills';
import Projects from './components/pagesections/Projects';


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/skills' component={ Skills } />
          <Route path='/projects' component={ Projects } />
        </Switch>
      </Router>
    </>
  );
}

export default App;
