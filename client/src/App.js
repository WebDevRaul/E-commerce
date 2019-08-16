import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar/Navbar';
import HomePage from './components/homepage/Home_Page';
import Shop from './components/shop/Shop';
import Auth from './components/auth/Auth';
import Checkout from './components/checkout/Checkout';

// Firebase
import { auth, createUserProfileDocument } from './firebase/utils';

// Redux
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { set_user } from './redux/actions/user';

// Css
import './App.css';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          store.dispatch(set_user({
            id: snapShot.id,
            ...snapShot.data() 
          }))
        });
      } else {
        store.dispatch(set_user({}))
      }
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
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
        </PersistGate>
      </Provider>
    )
  }
};

export default App;
