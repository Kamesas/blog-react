import React, { Component } from "react";
import CommentsList from "./CommentsList";

class Article extends Component {
  state = {
    showArticle: false
  };

  ShowHideArticle = () => {
    this.setState({ showArticle: !this.state.showArticle });
  };

  render() {
    const { title, text } = this.props;

    const startDisplay = (
      <div>
        <p>{text}</p>
        <CommentsList comment={this.props.comments} />
      </div>
    );

    return (
      <div>
        <button onClick={this.ShowHideArticle}>
          {!this.state.showArticle ? "ShowArticle" : "HideArticle"}
        </button>
        <h2>{title}</h2>
        {this.state.showArticle ? startDisplay : null}
        <hr />
      </div>
    );
  }
}

export default Article;
