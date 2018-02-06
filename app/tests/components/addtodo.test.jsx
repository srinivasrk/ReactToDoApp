var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {

  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call addtodo when submit is pressed', () => {
    var spy = expect.createSpy();
    var addtodoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addtodoForm));

    addtodoForm.refs.addtodo.value = 'check mail';
    TestUtils.Simulate.submit($el.find('form')[0]);
    console.log($el.find('form'));
    expect(spy).toHaveBeenCalledWith('check mail');
  });
})
