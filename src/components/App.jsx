import React, { Component } from "react";
import ArticleList from "./ArticleList";

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          <a href="/">React Blog</a>
        </h1>
        <ArticleList />
      </div>
    );
  }
}

export default App;
