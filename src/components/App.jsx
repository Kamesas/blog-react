import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          <a href="/">React Blog</a>
        </h1>
        <ArticleList />
        <Counter />
      </div>
    );
  }
}

export default App;
