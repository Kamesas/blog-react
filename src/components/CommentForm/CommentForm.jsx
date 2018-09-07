import React, { Component } from "react";
import "./style.css";

class CommentForm extends Component {
  state = {
    user: "",
    comment: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        user:
        <input
          value={this.state.user}
          onChange={this.handleChange("user")}
          className={this.getClassName("user")}
        />
        comment:
        <input
          value={this.state.comment}
          onChange={this.handleChange("comment")}
          className={this.getClassName("comment")}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }

  getClassName = type =>
    this.state[type].length && this.state[type].length < limits[type].min
      ? "form-input__error"
      : "";

  handleChange = type => ev => {
    const { value } = ev.target;
    if (value.length > limits[type].max) return;
    this.setState({
      [type]: value
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({
      user: "",
      comment: ""
    });
  };
}

const limits = {
  user: {
    min: 5,
    max: 15
  },
  comment: {
    min: 20,
    max: 50
  }
};

export default CommentForm;
