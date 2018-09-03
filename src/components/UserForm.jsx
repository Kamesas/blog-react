import React, { Component } from "react";

class UserForm extends Component {
  state = { userInput: "" };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.userINput}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
  handleInputChange = e => {
    console.log(this.state.userInput);
    this.setState({ userInput: e.target.value });
  };
}

export default UserForm;
