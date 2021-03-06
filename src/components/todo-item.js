import React from 'react'; 
import classNames from 'classnames';

export default React.createClass({
  render: function () {
    var classes = classNames({
      'todo-item': true, 
      'done': this.props.done
    }); 
    
    return(
      <div className={classes} onClick={this.props.onClick}>
        {this.props.task}
      </div>
    ); 
  }
});