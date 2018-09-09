import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Counter from "./Counter";
import Filters from "./Filters";

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          <a href="/">React Blog</a>
        </h1>
        <Filters articles={[]} />
        <ArticleList />
        <Counter />
      </div>
    );
  }
}

export default App;
