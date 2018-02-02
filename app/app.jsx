var React = require('react');
var ReactDOM = require('react-dom');
// ES6 Destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var ToDoApp = require('ToDoApp');

//Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css');

//app css
require('style!css!sass!applicationStyles');
$(document).foundation();

// var obj = {
//   name: 'Andrew'
// }
//
// var {name} = obj;

ReactDOM.render(
  <ToDoApp />,
  document.getElementById('app')
);
