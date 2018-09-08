import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actionCreators";

class Counter extends Component {
  state = {};
  render() {
    return (
      <div>
        <button onClick={this.hundleDecrement}>-</button>
        <h2>{this.props.counter}</h2>
        <button onClick={this.hundleIncrement}>+</button>
      </div>
    );
  }

  hundleIncrement = () => {
    console.log("increment");
    this.props.increment();
  };
  hundleDecrement = () => {
    console.log("decrement");
    this.props.decrement();
  };
}

function mapStateToProps(state) {
  return {
    counter: state.count
  };
}

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
