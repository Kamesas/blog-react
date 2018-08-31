import React, { Component } from "react";

class Article extends Component {
  state = {
    showArticle: false
  };
  ShowHideArticle = () => {
    this.setState({ showArticle: !this.state.showArticle });
  };
  render() {
    const { article } = this.props;
    const startDisplay = (
      <div>
        <h1>{article.title}</h1>
        <p>{article.text}</p>
      </div>
    );
    return (
      <div>
        <button onClick={this.ShowHideArticle}>
          {!this.state.showArticle ? "ShowArticle" : "HideArticle"}
        </button>
        {this.state.showArticle ? startDisplay : null}
      </div>
    );
  }
}

export default Article;
