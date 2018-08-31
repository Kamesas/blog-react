import React from "react";
import Article from "./Article";
import articles from "./fixtures";

const ArticleList = props => {
  return (
    <div>
      <h1>
        <a href="/">React Blog</a>
      </h1>
      {articles.map(article => (
        <Article
          key={article.id}
          title={article.title}
          text={article.text}
          comments={article.comments}
        />
      ))}
    </div>
  );
};

export default ArticleList;
