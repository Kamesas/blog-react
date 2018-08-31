import React, { Component } from "react";

class Article extends Component {
  render() {
    console.log(this.props);
    const { article } = this.props;
    return (
      <div>
        <h1>{article.title}</h1>
        <p>{article.text}</p>
      </div>
    );
  }
}

export default Article;
