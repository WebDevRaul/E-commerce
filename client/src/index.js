import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App';

// Redux
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

// Css
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
, document.getElementById('root'));
