import React, { Component as ReactComponent } from "react";

export default OriginalComponent =>
  class WrappAccardeon extends ReactComponent {
    state = {
      openArticleId: null
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenArticle={this.toggleOpenArticle}
        />
      );
    }

    toggleOpenArticle = id => ev => {
      ev && ev.preventDefault && ev.preventDefault();
      if (this.state.openArticleId === id) {
        this.setState({ openArticleId: null });
      } else {
        this.setState({ openArticleId: id });
      }
    };
  };
