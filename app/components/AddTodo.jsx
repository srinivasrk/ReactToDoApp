var React = require('react');

var AddTodo = React.createClass({
  onAddTodoSubmit: function(e){
    e.preventDefault();
    var addtodoItem = this.refs.addtodo.value;
    if(addtodoItem.length > 1){
      this.props.onAddTodo(addtodoItem);
      this.refs.addtodo.value = '';
    }
  },

  render : function(){
    return(
      <div>
        <form ref="form" onSubmit={this.onAddTodoSubmit} className="addtodo-form">
          <input ref="addtodo" type="text" />
          <button className="button expanded"> Add Todo </button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
