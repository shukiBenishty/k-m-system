import React  from 'react';
import ReactDomServer  from 'react-dom/server';
import { StaticRouter } from 'react-router'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import database from 'firebase-database';
import reducers from '../jsx/reducers.jsx';
import Routes  from '../jsx/routes.jsx';




export default class ServerApp extends React.Component {
  constructor(props) {
    super(props);

    database.initializeApp(props.appConfig);
  }


  render() {
    var store = createStore(reducers);

    return (
      <Provider store={store}>
          <StaticRouter location={this.props.url} context={this.props.context}>
            <Routes/>
          </StaticRouter>
      </Provider>);
  }
}
