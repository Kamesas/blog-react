import React, { Component } from "react";
import Comments from "./Comments";

class CommentsList extends Component {
  getComment = () => {
    if (!this.props.comment || !this.props.comment.length === 0) {
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
