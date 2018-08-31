import React, { Component } from "react";

class Comments extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.user}</h5>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Comments;
