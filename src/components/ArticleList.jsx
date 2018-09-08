import React, { Component } from "react";
import Article from "./Article/Article";
//import articles from "../fixtures";
import accardeon from "../decorators/accardeon";
import { connect } from "react-redux";

class ArticleList extends Component {
  render() {
    return (
      <div>
        {this.props.articles.map(article => (
          <Article
            key={article.id}
            id={article.id}
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

function mapStateToProps(state) {
  return {
    articles: state.articleReducer
  };
}

export default connect(mapStateToProps)(accardeon(ArticleList));
