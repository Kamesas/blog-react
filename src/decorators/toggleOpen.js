import React, { Component as ReactComponent } from "react";

export default OriginalComponent =>
  class WrappedComponent extends ReactComponent {
    state = {
      showArticle: false
    };
    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          ShowHideBtn={this.ShowHideArticle}
        />
      );
    }

    ShowHideArticle = ev => {
      ev && ev.preventDefault && ev.preventDefault();
      this.setState({ showArticle: !this.state.showArticle });
    };
  };
