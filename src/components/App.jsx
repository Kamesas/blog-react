import React, { Component } from "react";
import ArticleList from "./ArticleList";
import UserForm from "./UserForm";

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          <a href="/">React Blog</a>
        </h1>
        <UserForm />
        <ArticleList />
      </div>
    );
  }
}

export default App;
