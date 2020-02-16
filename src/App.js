import React from 'react';
import './App.css';
import Home from './components/home/Home';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Archived from './components/home/Archived';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/archived" component={Archived} />
          </Switch>
        </Router>
    </div>

  );
}

export default App;
