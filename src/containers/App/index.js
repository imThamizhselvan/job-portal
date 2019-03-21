import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Job } from '../Job';
import { Home } from '../Home';

class App extends Component {
  render () {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/job" component={Job} />
      </Router> 
    );
  }
}

export default App;