// export default ({state, content}) =>{
//   return`
// <!DOCTYPE html>
// <html dir="rtl" lang="he">
// <head>
//   <title>Login</title>
//   <meta charset="utf-8" />
//   <link rel="stylesheet" href="https://unpkg.com/react-table@latest/react-table.css">
// </head>
// <body>
//     <div id="root">${content}</div>
//     <script>
//     window.__PRELOADED_STATE__ = ${JSON.stringify(state)};
//     </script>
//     <script src="https://k-m-system.firebaseapp.com/__/firebase/4.8.1/firebase-app.js"></script>
//     <script src="https://k-m-system.firebaseapp.com/__/firebase/4.8.1/firebase-database.js"></script>
//     <script src="https://k-m-system.firebaseapp.com/__/firebase/init.js"></script>
//     <script src='./client.bundle.js'></script>
// </body>
// </html>`;
// };



"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function(_ref) {
  var state = _ref.state,
    content = _ref.content;

  return (
    '\n<!DOCTYPE html>\n<html dir="rtl" lang="he">\n<head>\n  <title>Login</title>\n  <meta charset="utf-8" />\n  <link rel="stylesheet" href="https://unpkg.com/react-table@latest/react-table.css">\n</head>\n<body>\n    <div id="root">' +
    content +
    "</div>\n    <script>\n    window.__PRELOADED_STATE__ = " +
    JSON.stringify(state) +
    ';\n    </script>\n    <script src="https://k-m-system.firebaseapp.com/__/firebase/4.8.1/firebase-app.js"></script>\n    <script src="https://k-m-system.firebaseapp.com/__/firebase/4.8.1/firebase-database.js"></script>\n    <script src="https://k-m-system.firebaseapp.com/__/firebase/init.js"></script>\n    <script src=\'./client.bundle.js\'></script>\n</body>\n</html>'
  );
};
