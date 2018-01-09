// import template from './template.js';
// // import ServerApp from '../containers/ServerApp.jsx';
// import express from 'express';
// import React  from 'react';
// import ReactDomServer  from 'react-dom/server';
// import { StaticRouter } from 'react-router'
// import database from '../../functions/firebase-database.js';
//
//
// const appConfig = {
//     apiKey: "AIzaSyCNzNDPMjqos1n_OfcxlVsuVjtySBwEeto",
//     authDomain: "k-m-system.firebaseapp.com",
//     databaseURL: "https://k-m-system.firebaseio.com",
//     projectId: "k-m-system",
//     storageBucket: "k-m-system.appspot.com",
//     messagingSenderId: "487981116258"
//   };
//
//
// var app = express();
// const ServerApp = React.createFactory(require('../../functions/build/server.bundle.js').default);
//
// function handleRender(req, res) {
//       database.initializeApp(appConfig);
//       const componentHTML = ReactDomServer.renderToString(ServerApp({url: '', context: {}, appConfig}));
//       // const componentHTML = ReactDomServer.renderToString(<ServerApp url='' context={{}} appConfig={appConfig}/>);
//       const html = template({
//         content: componentHTML,
//         state: ''
//       });
//     //  console.log(store.dispatch(initUrlParams(req.url)));
//       res.status(200).send(html);
// };
//
//
// app.use(express.static('localServer/public'));
//
// app.get('*', handleRender);
//
// app.listen(3000);
//




"use strict";

var _template = require("./template.js");

var _template2 = _interopRequireDefault(_template);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _server = require("react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require("react-router");

var _firebaseDatabase = require("../../functions/firebase-database.js");

var _firebaseDatabase2 = _interopRequireDefault(_firebaseDatabase);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var appConfig = {
  apiKey: "AIzaSyCNzNDPMjqos1n_OfcxlVsuVjtySBwEeto",
  authDomain: "k-m-system.firebaseapp.com",
  databaseURL: "https://k-m-system.firebaseio.com",
  projectId: "k-m-system",
  storageBucket: "k-m-system.appspot.com",
  messagingSenderId: "487981116258"
};
// import ServerApp from '../containers/ServerApp.jsx';

var app = (0, _express2.default)();
var ServerApp = _react2.default.createFactory(
  require("../../functions/build/server.bundle.js").default
);

function handleRender(req, res) {
  _firebaseDatabase2.default.initializeApp(appConfig);
  var componentHTML = _server2.default.renderToString(
    ServerApp({ url: "", context: {}, appConfig: appConfig })
  );
  // const componentHTML = ReactDomServer.renderToString(<ServerApp url='' context={{}} appConfig={appConfig}/>);
  var html = (0, _template2.default)({
    content: componentHTML,
    state: ""
  });
  //  console.log(store.dispatch(initUrlParams(req.url)));
  res.status(200).send(html);
}

app.use(_express2.default.static("localServer/public"));

app.get("*", handleRender);

app.listen(3000);
