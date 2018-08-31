import React, { Component } from "react";

class Article extends Component {
  state = {
    showArticle: false
  };

  ShowHideArticle = () => {
    this.setState({ showArticle: !this.state.showArticle });
  };

  render() {
    //const { title, text } = this.props;

    const startDisplay = (
      <div>
        <p>{this.props.text}</p>
      </div>
    );
    return (
      <div>
        <button onClick={this.ShowHideArticle}>
          {!this.state.showArticle ? "ShowArticle" : "HideArticle"}
        </button>
        <h2>{this.props.title}</h2>
        {this.state.showArticle ? startDisplay : null}
      </div>
    );
  }
}

export default Article;
