import React, { Component } from "react";
import { connect } from "react-redux";
import { increment } from "./actionCreators";

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
    this.props.dispatchIncrement();
  };
}

function mapStateToProps(state) {
  return {
    counter: state.count
  };
}

const mapDispatchToProps = {
  dispatchIncrement: increment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
