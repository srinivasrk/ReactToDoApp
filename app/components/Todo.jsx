var React = require('react');

var Todo = React.createClass({
  render: function(){
    var {text} = this.props;
    var {id} = this.props;
    return(
      <div>
        <p> {id}. {text} </p>
      </div>
    )
  }
});

module.exports = Todo;
