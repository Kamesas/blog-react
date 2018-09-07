import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick={this.hundleIncrement}>-</button>
      </div>
    );
  }

  hundleIncrement = () => {
    console.log("increment");
    this.props.dispatch({
      type: "INCREMENT"
    });
  };
}

function mapStateToProps(state) {
  return {
    counter: state.count
  };
}

export default connect(mapStateToProps)(Counter);
