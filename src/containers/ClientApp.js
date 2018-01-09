import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import App from './App.jsx';
import reducers from '../jsx/reducers.jsx';
import Routes from '../jsx/routes.jsx';

const store = createStore(reducers,
                  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    // Grab the state from a global variable injected into the server-generated code
    const preloadedState = window.__initialState;

    if( preloadedState ) {


        // Allow the passed state to be garbage-collected
        delete window.__initialState;

    }


render(<Provider store={store}>
                  <BrowserRouter>
                    <Routes/>
                  </BrowserRouter>
                </Provider>,
                              document.getElementById('root'));
