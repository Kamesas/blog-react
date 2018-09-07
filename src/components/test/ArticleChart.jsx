import React, { Component } from "react";

class ArticleChart extends Component {
  state = {};
  render() {
    return (
      <div ref={this.thisContainer}>
        <h1 ref={node => console.log("ref --- ", node)}>
          <a href="/">React Blog</a>
        </h1>
      </div>
    );
  }
  thisContainer = ref => {
    console.log(ref);
  };
}

export default ArticleChart;
