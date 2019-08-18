import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import Navbar from './components/layout/Navbar/Navbar';
import HomePage from './components/homepage/Home_Page';
import Shop from './components/shop/Shop';
import Auth from './components/auth/Auth';
import Checkout from './components/checkout/Checkout';

// Firebase
import { auth, createUserProfileDocument, addCollAndDoc } from './firebase/utils';

// Redux
import { connect } from 'react-redux';
import { set_user } from './redux/actions/user';
import { select_collection_obj_to_array } from './redux/selectors/shop';

// Reselect
import { createStructuredSelector } from 'reselect';

// Css
import './App.css';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { collections, set_user } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          set_user({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        set_user({});
      }
    });
    addCollAndDoc('collections', collections)
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  
  render() {
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
  }
};

App.propTypes = {
  set_user: PropTypes.func.isRequired,
  collections: PropTypes.array.isRequired
}

const mapStateToProps = createStructuredSelector({
  collections: select_collection_obj_to_array
});

export default connect(mapStateToProps, { set_user })(App);
