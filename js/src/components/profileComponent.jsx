import React from 'react';

module.exports = React.createClass({
  render() {
    return (
      <div>
        <h1 id="name">{this.props.first_name} {this.props.last_name}</h1>
        <span>{this.props.title}</span><hr />
      </div>
    );
  }
});
