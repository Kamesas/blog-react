import React, { Component } from "react";
import Article from "./Article";
import articles from "../fixtures";
import accardeon from "../decorators/accardeon";

class ArticleList extends Component {
  render() {
    return (
      <div>
        {articles.map(article => (
          <Article
            key={article.id}
            title={article.title}
            text={article.text}
            comments={article.comments}
            showArticle={article.id === this.props.openArticleId}
            ShowHideBtn={this.props.toggleOpenArticle(article.id)}
          />
        ))}
      </div>
    );
  }
}

export default accardeon(ArticleList);
