import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentsList from "../CommentsList";
import CommentForm from "../CommentForm/CommentForm";
import Filters from "../Filters";
import { CSSTransitionGroup } from "react-transition-group";
import "./article.css";

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
        <Filters />
        <CommentsList comment={this.props.comments} />
        <br />
        <CommentForm />
      </div>
    );

    return (
      <div>
        <h2>{title}</h2>
        <button onClick={ShowHideBtn}>
          {!this.props.showArticle ? "ShowArticle" : "HideArticle"}
        </button>
        <button onClick={this.hundleDelete}>Del</button>

        <CSSTransitionGroup
          transitionName="article"
          transitionAppear
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          transitionAppearTimeout={500}
          component="div"
        >
          {this.props.showArticle ? startDisplay : null}
        </CSSTransitionGroup>

        <hr />
      </div>
    );
  }
  hundleDelete = () => {
    console.log("del");
  };
}

export default Article;
