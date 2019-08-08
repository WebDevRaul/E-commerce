import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar/Navbar';
import HomePage from './components/homepage/Home_Page';
import Hats from './components/hats/Hats';
import Jackets from './components/jackets/Jackets';
import Sneakers from './components/sneakers/Sneakers';
import Womens from './components/womens/Womens';
import Mens from './components/mens/Mens';
import Shop from './components/shop/Shop';
import Auth from './components/auth/Auth';

// Css
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/hats' component={Hats} />
            <Route exact path='/jackets' component={Jackets} />
            <Route exact path='/sneakers' component={Sneakers} />
            <Route exact path='/womens' component={Womens} />
            <Route exact path='/mens' component={Mens} />
            <Route exact path='/shop' component={Shop} />

            <Route exact path='/auth' component={Auth} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
