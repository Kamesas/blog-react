import React, { Component } from "react";
import Comments from "./Comments";

class CommentsList extends Component {
  static defaultProps = {
    comment: []
  };

  getComment = () => {
    if (!this.props.comment.length) {
      return <p>No comments yet</p>;
    }
    return this.props.comment.map(item => (
      <Comments key={item.id} text={item.text} user={item.user} />
    ));
  };

  render() {
    return <div>{this.getComment()}</div>;
  }
}

export default CommentsList;
