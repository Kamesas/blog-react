import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Counter from "./Counter";
import Filters from "./Filters";

class App extends Component {
  state = {
    isOpen: false
  };
  render() {
    return (
      <div>
        <h1>
          <a href="/">React Blog</a>
        </h1>
        <Counter />
        <button onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
          Filters
        </button>

        {this.state.isOpen ? <Filters articles={[]} /> : null}
        <ArticleList />
      </div>
    );
  }
}

export default App;
