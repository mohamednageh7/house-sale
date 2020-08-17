import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// component
import Navbar from './components/layout/Navbar';
import HomeFind from './components/find home/HomeFind';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomeFind} />
      </Switch>
    </Router>
  );
}

export default App;
