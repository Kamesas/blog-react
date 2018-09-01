import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentsList from "./CommentsList";
import toggleOpen from "../decorators/toggleOpen";

class Article extends Component {
  static propTypes = {
    // article: PropTypes.shape({
    //   id: PropTypes.string.isRequired,
    //   title: PropTypes.string.isRequired,
    //   text: PropTypes.string
    // }).isRequired
    title: PropTypes.string.isRequired,
    text: PropTypes.string
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
        <button onClick={this.props.ShowHideArticle}>
          {!this.props.showArticle ? "ShowArticle" : "HideArticle"}
        </button>
        <h2>{title}</h2>
        {this.props.showArticle ? startDisplay : null}
        <hr />
      </div>
    );
  }
}

export default toggleOpen(Article);
