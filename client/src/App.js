import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import Navbar from './components/layout/Navbar/Navbar';
import HomePage from './components/homepage/Home_Page';
import Shop from './components/shop/Shop';
import Auth from './components/auth/Auth';
import Checkout from './components/checkout/Checkout';

// Firebase
import { auth, createUserProfileDocument } from './firebase/utils';

// Redux
import { connect } from 'react-redux';
import { set_user } from './redux/actions/user';

// Css
import './App.css';

const App = ({ set_user }) => {

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          set_user({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        set_user({});
      }
    });
    
    return () => {
      unsubscribeFromAuth()
    }
  },[set_user])

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={Checkout} />

          <Route exact path='/sign-in' component={Auth} />
        </Switch>
      </Router>
    </div>
  )
};

App.propTypes = {
  set_user: PropTypes.func.isRequired,
}

export default connect(null, { set_user })(App);
