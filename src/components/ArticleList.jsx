import React, { Component } from "react";
import Article from "./Article";
import articles from "../fixtures";

class ArticleList extends Component {
  state = {
    openArticleId: null
  };

  toggleOpenArticle = id => ev => {
    this.setState({ openArticleId: id });
    console.log(this.state.openArticleId);
  };

  render() {
    return (
      <div>
        {articles.map(article => (
          <Article
            key={article.id}
            title={article.title}
            text={article.text}
            comments={article.comments}
            showArticle={article.id === this.state.openArticleId}
            ShowHideBtn={this.toggleOpenArticle(article.id)}
          />
        ))}
      </div>
    );
  }
}

export default ArticleList;
