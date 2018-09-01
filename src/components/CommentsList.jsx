import React, { Component } from "react";
import toggleOpen from "../decorators/toggleOpen";
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
    return (
      <div>
        <button onClick={this.props.ShowHideBtn}>
          {!this.props.showArticle ? "ShowComments" : "HideComments"}
        </button>
        {this.props.showArticle ? this.getComment() : null}
      </div>
    );
  }
}

export default toggleOpen(CommentsList);
