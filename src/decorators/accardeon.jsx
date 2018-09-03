import React, { Component as ReactComponent } from "react";

export default OriginalComponent =>
  class WrappedComponent extends ReactComponent {
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
      this.setState({ openArticleId: id });
    };
  };
