import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppNavigation from './app/navigation/AppNavigation'
import AppRoutes from './app/routes/AppRoutes'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <AppNavigation/>
        <hr/>
        <AppRoutes/>
      </div>
      </Router>
    );
  }
}

export default App;
