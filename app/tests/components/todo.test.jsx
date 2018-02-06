var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });
});
