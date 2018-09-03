import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentsList from "./CommentsList";

class Article extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string
  };

  render() {
    const { title, text, ShowHideBtn } = this.props;

    const startDisplay = (
      <div>
        <p>{text}</p>
        <CommentsList comment={this.props.comments} />
      </div>
    );

    return (
      <div>
        <button onClick={ShowHideBtn}>
          {!this.props.showArticle ? "ShowArticle" : "HideArticle"}
        </button>
        <h2>{title}</h2>
        {this.props.showArticle ? startDisplay : null}
        <hr />
      </div>
    );
  }
}

export default Article;
